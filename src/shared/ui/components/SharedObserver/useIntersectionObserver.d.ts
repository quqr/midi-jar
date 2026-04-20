export type OnIntersect = (entry: IntersectionObserverEntry) => void;
/**
 * Hook that observer the interction of the given element
 */
export declare function useIntersectionObserver<T extends HTMLElement>(onIntersect: OnIntersect, options?: IntersectionObserverInit): import("../../hooks/useRefEffect").RefEffetCallbackRef<T>;
export default useIntersectionObserver;
