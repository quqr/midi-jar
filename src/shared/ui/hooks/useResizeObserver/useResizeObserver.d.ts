export type UseResizeObserverCallback = (entries: ResizeObserverEntry[], observer: ResizeObserver) => void;
export type UseResizeObserverOptions = {
    disabled?: boolean;
} & ResizeObserverOptions;
/**
 * Hook to manage the creation of a resize observer
 */
export declare function useResizeObserver<T extends HTMLElement>(targetEl: T | undefined | null, callback: UseResizeObserverCallback, options?: UseResizeObserverOptions): void;
export default useResizeObserver;
