type UseAutoScrollOptions = {
    targetQuerySelector?: string;
    targetElement?: HTMLElement | null;
    delayScroll?: number;
};
export declare function useAutoScroll<T extends HTMLElement>(containerEl: T | undefined | null, options?: UseAutoScrollOptions): void;
export default useAutoScroll;
