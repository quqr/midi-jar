import React, { useMemo, useState, useRef } from 'react';
/**
 * Set the given ref regardless of its type
 */
export function setRef(ref, el) {
    if (!ref)
        return;
    if (typeof ref === 'function' && el !== undefined) {
        ref(el);
    }
    else if (typeof ref === 'object') {
        ref.current = el;
    }
}
/**
 * Merge multiple ref into a single callback
 */
export function mergeRef(ref1, ref2, ref3) {
    return (el) => {
        setRef(ref1, el);
        setRef(ref2, el);
        setRef(ref3, el);
    };
}
/**
 * Hook that return a merged callback ref with the
 * refs passed in argument
 */
export function useMergeRef(ref1, ref2, ref3) {
    return useMemo(() => mergeRef(ref1, ref2, ref3), [ref1, ref2, ref3]);
}
/**
 * Make a fork of the given ref
 */
export function useForkCallbackRef(ref, otherRef) {
    const [el, ref2] = useState(null);
    const mergedRef = useMemo(() => mergeRef(ref, ref2, otherRef), [ref, ref2, otherRef]);
    return [el, mergedRef];
}
/**
 * Make a fork of the given ref
 */
export function useForkRef(ref, otherRef) {
    const ownRef = useRef(null);
    const mergedRef = useMemo(() => mergeRef(ref, ownRef, otherRef), [ref, ownRef, otherRef]);
    return [ownRef, mergedRef];
}
/**
 * Return the current ref on the given React node
 */
export function getChildRef(child) {
    return React.isValidElement(child) && Object.prototype.hasOwnProperty.call(child, 'ref')
        ? child?.ref
        : null;
}
