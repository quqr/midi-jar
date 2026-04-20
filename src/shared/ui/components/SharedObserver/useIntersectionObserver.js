import { useContext, useRef } from 'react';
import { useRefEffect } from '../../hooks/useRefEffect';
import { IntersectionContext } from './SharedObserver';
/**
 * Hook that observer the interction of the given element
 */
export function useIntersectionObserver(onIntersect, options) {
    const { root, rootMargin, threshold } = options || {};
    const observe = useContext(IntersectionContext);
    const ownObserverRef = useRef(null);
    return useRefEffect((el) => {
        let unobserve = null;
        if (observe) {
            // observe the iven element using the shared observer
            unobserve = observe(el, onIntersect);
        }
        else {
            // using our own oberver
            ownObserverRef.current = new IntersectionObserver(function ownIntersect(entries) {
                const entry = entries?.[0];
                onIntersect(entry);
            }, { root, rootMargin, threshold });
            ownObserverRef.current.observe(el);
        }
        return () => {
            if (unobserve)
                unobserve();
            if (ownObserverRef.current) {
                ownObserverRef.current.unobserve(el);
                ownObserverRef.current.disconnect();
            }
            ownObserverRef.current = null;
        };
    }, [observe, onIntersect, root, rootMargin, threshold]);
}
export default useIntersectionObserver;
