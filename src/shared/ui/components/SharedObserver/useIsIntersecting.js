import React from 'react';
import { useOnIntersect } from './useOnIntersect';
/**
 * Hook that observes the intersection of the given element and save
 * the result in a state variable
 * @deprecated Use the new 'useOnIntersect' hook instead.
 */
export function useIsIntersecting(options) {
    const [isIntersecting, setIsIntersecting] = React.useState(false);
    const intersectionRef = useOnIntersect(setIsIntersecting, options);
    return [isIntersecting, intersectionRef];
}
export default useIsIntersecting;
