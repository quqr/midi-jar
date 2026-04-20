import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import { arrow as arrowMiddleware, flip, offset, shift } from '@floating-ui/react-dom';
import { bindClassNames } from '../../utils/classNames';
import { forwardRefWithAs } from '../../utils/forwardRef';
import { useMergeRef } from '../../utils/refUtils';
import { usePopper } from '../Popper';
import styles from './Tooltip.module.scss';
const cx = bindClassNames(styles);
const statics = {
    top: 'bottom',
    right: 'left',
    bottom: 'top',
    left: 'right',
};
export const TooltipPopper = forwardRefWithAs((props, ref) => {
    const { as, className, anchorEl, show, placement: placementProps, title, content, ...otherProps } = props;
    const arrowRef = useRef(null);
    const middleware = useMemo(() => [
        offset(6),
        flip(),
        shift(),
        arrowMiddleware({
            element: arrowRef,
        }),
    ], []);
    const { x, y, refs: { floating, setReference, }, strategy, update, placement, middlewareData: { arrow }, } = usePopper({
        middleware,
        autoUpdate: false,
        placement: placementProps,
    });
    useEffect(() => {
        setReference(anchorEl);
        update();
    }, [anchorEl, setReference]);
    const handleArrowRef = useCallback((el) => {
        arrowRef.current = el;
        update();
    }, [update]);
    const mergedRef = useMergeRef(floating, ref);
    const staticSide = statics[placement.split('-')[0]];
    const Element = as || 'div';
    return (<>
      <Element className={cx('root', show ? '--show' : '--hide', className)} role="tooltip" ref={mergedRef} aria-live="polite" style={{
            position: strategy,
            top: y ?? -9999,
            left: x ?? -9999,
        }} {...otherProps}>
        <div ref={handleArrowRef} className={styles.arrow} style={{
            position: 'absolute',
            left: arrow?.x != null ? arrow?.x : '',
            top: arrow?.y != null ? arrow?.y : '',
            right: '',
            bottom: '',
            [staticSide]: -4,
        }}/>
        {title && <div className={cx('title')}>{title}</div>}
        {content}
      </Element>
    </>);
});
TooltipPopper.displayName = 'TooltipPopper';
export default TooltipPopper;
