import React, { useState } from 'react';
import { useOnIntersect } from '../SharedObserver';
/**
 * Renders the children when entering the viewport
 *
 * You can use this component as a child of a `SharedObserver` component for better performance when managing lots of observers.
 */
export const RenderWhenVisible = ({ children, placeholder }) => {
    const rectRef = React.useRef(null);
    const [visible, setVisible] = useState(false);
    const intersectionRef = useOnIntersect(setVisible);
    let displayedElement = children;
    if (!visible) {
        displayedElement =
            typeof placeholder === 'function' ? placeholder(rectRef.current) : placeholder;
    }
    return React.isValidElement(displayedElement)
        ? React.cloneElement(displayedElement, {
            ref: intersectionRef,
        })
        : null;
};
export default RenderWhenVisible;
