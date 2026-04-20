import { OnIntersect } from './useIntersectionObserver';
export type OnIntersectOptions = IntersectionObserverInit & {
    onIntersect?: OnIntersect;
};
/**
 * Hook that observes the intersection change of the given element
 */
export declare function useOnIntersect<T extends HTMLElement>(onIntersectChange?: (isIntersecting: boolean) => void, options?: OnIntersectOptions): import("../..").RefEffetCallbackRef<T>;
export default useOnIntersect;
