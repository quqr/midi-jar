import React, { useRef, useEffect, useState } from 'react';
import { bindClassNames } from '../../utils/classNames';
import { forwardRefWithAs } from '../../utils/forwardRef';
import { useMergeRef } from '../../utils/refUtils';
import { isAnimationDisabled } from '../../hooks/useAnimationDuration';
import { useEvent } from '../../hooks/useEvent';
import { usePropsRef } from '../../hooks/usePropsRef';
import { useStateMachine } from '../../hooks/useStateMachine';
import styles from './Collapse.module.scss';
const cx = bindClassNames(styles);
const transitionMachine = {
    collapsed: {
        OPEN: 'preOpen',
    },
    opening: {
        TRANSITION_END: 'opened',
        CLOSE: 'collapsing',
    },
    opened: {
        CLOSE: 'preCollapse',
    },
    collapsing: {
        TRANSITION_END: 'collapsed',
        OPEN: 'opening',
    },
    preCollapse: {
        OPEN: 'opened',
        READY: 'collapsing',
    },
    preOpen: {
        CLOSE: 'collapsed',
        READY: 'opening',
    },
};
/**
 * Wraps any content to be conditionally displayed, with an expanding animation.
 *
 * The open state must be controlled externally.
 */
export const Collapse = forwardRefWithAs((props, ref) => {
    const { as, open, children, className, keepMounted, wrapperProps, collapsedHeight = 0, onTransitionEnd, ...otherProps } = props;
    const selfRef = useRef(null);
    const measureRef = useRef(null);
    const mergedWrapperRef = useMergeRef(measureRef, wrapperProps?.ref);
    const mergedRef = useMergeRef(ref, selfRef);
    const [{ state }, dispatch] = useStateMachine(transitionMachine, open ? 'opened' : 'collapsed');
    const [height, setHeight] = useState(collapsedHeight);
    const collapsedRef = usePropsRef(collapsedHeight || 0);
    useEffect(() => {
        if (open) {
            dispatch({
                type: 'OPEN',
            });
        }
        else {
            dispatch({
                type: 'CLOSE',
            });
        }
    }, [open, dispatch]);
    useEffect(() => {
        switch (state) {
            case 'preOpen': {
                setHeight(collapsedRef.current);
                window.requestAnimationFrame(() => {
                    dispatch({
                        type: 'READY',
                    });
                });
                break;
            }
            case 'opening': {
                if (measureRef.current) {
                    const h = measureRef.current.getBoundingClientRect().height;
                    setHeight(h);
                }
                if (isAnimationDisabled()) {
                    dispatch({
                        type: 'TRANSITION_END',
                    });
                }
                break;
            }
            case 'opened': {
                setHeight('auto');
                break;
            }
            case 'preCollapse': {
                if (measureRef.current) {
                    const h = measureRef.current.getBoundingClientRect().height;
                    setHeight(h);
                    window.requestAnimationFrame(() => {
                        dispatch({
                            type: 'READY',
                        });
                    });
                }
                break;
            }
            case 'collapsing': {
                setHeight(collapsedRef.current);
                if (isAnimationDisabled()) {
                    dispatch({
                        type: 'TRANSITION_END',
                    });
                }
                break;
            }
            default:
                break;
        }
    }, [state, dispatch, collapsedRef]);
    /**
     * Handle transition end
     */
    const handleTransitionEnd = useEvent((e) => {
        e.stopPropagation();
        if (onTransitionEnd)
            onTransitionEnd(e);
        if (selfRef.current && selfRef.current === e.target) {
            dispatch({
                type: 'TRANSITION_END',
            });
        }
    });
    const Element = as || 'div';
    return (<Element ref={mergedRef} className={cx('root', className)} {...otherProps} style={{
            ...(otherProps?.style || {}),
            overflowY: state === 'opened' ? 'visible' : 'hidden',
            height,
        }} onTransitionEnd={handleTransitionEnd}>
      {keepMounted || state !== 'collapsed' ? (<div {...(wrapperProps || {})} style={{ ...(wrapperProps?.style || {}) }} ref={mergedWrapperRef}>
          {children}
        </div>) : null}
    </Element>);
});
Collapse.displayName = 'Collapse';
export default Collapse;
