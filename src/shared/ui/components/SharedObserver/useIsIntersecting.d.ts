import { OnIntersectOptions } from './useOnIntersect';
/**
 * Hook that observes the intersection of the given element and save
 * the result in a state variable
 * @deprecated Use the new 'useOnIntersect' hook instead.
 */
export declare function useIsIntersecting<T extends HTMLElement>(options?: OnIntersectOptions): (boolean | import("../..").RefEffetCallbackRef<T>)[];
export default useIsIntersecting;
