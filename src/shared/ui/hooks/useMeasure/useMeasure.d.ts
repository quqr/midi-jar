type Measure<T> = {
    dimension?: DOMRect | null;
    ref: React.Dispatch<T>;
    update: () => void;
    element?: T | null;
};
type MeasureOptions = {
    disabled?: boolean;
    resizeOberserOptions?: ResizeObserverOptions;
};
/**
 * Hook used to measure the size of an element
 */
export declare function useMeasure<T extends HTMLElement>(options?: MeasureOptions): Measure<T>;
export default useMeasure;
