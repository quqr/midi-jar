/**
 * Hook that make a copy of the given props on a ref so that
 * you can then use it in a non-reactive way
 */
export declare function usePropsRef<T>(props: T): {
    current: T;
};
export default usePropsRef;
