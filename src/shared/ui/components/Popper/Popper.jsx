import React, { useEffect } from 'react';
import { useMergeRef } from '../../utils/refUtils';
import { forwardRefWithAs } from '../../utils/forwardRef';
import { usePopper } from './usePopper';
/**
 * Utility component used to position an element relatively to an anchor element using [floating-ui](https://floating-ui.com/).
 */
export const Popper = forwardRefWithAs((props, ref) => {
    const { as, strategy, children, anchorEl, placement, matchWidth, middleware, autoUpdate, limitHeight, ...otherProps } = props;
    const { x, y, refs: { floating, setReference, }, update, strategy: position, middlewareData: { arrow }, } = usePopper({
        strategy,
        placement,
        middleware,
        autoUpdate,
        matchWidth,
        limitHeight,
    });
    // pass the given anchor ref to the popper hook
    useEffect(() => {
        if (anchorEl) {
            console.log(anchorEl);
            setReference(anchorEl);
            update();
        }
    }, [anchorEl, setReference]);
    const mergedRef = useMergeRef(ref, floating);
    const elementProps = {
        ref: mergedRef,
        arrow,
        style: {
            ...(otherProps?.style || {}),
            position,
            top: y ?? -9999,
            left: x ?? -9999,
        },
    };
    const Element = as || 'div';
    return typeof children === 'function' ? (children(elementProps)) : (<Element {...otherProps} {...elementProps}>
      {children}
    </Element>);
});
Popper.displayName = 'Popper';
export default Popper;
