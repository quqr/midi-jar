export type ProgressProps = {
    /**
     * The current value of progress
     */
    value?: number;
    /**
     * The minimum value that represents the start of progress
     */
    min?: number;
    /**
     * The maximum vlaue that represents the end of progress
     */
    max?: number;
    /**
     * The text for the current value of progress
     */
    valueText?: string;
    /**
     * Makes the progress animated indefinitely
     */
    indeterminate?: boolean;
};
/**
 * Renders a horizontal progress bar to give some feedback on a loading state.
 *
 * Its value can be clamped to any minimum and maximum values (e.g. 0...1, or 0...100), or indeterminate (with a looping animation).
 */
export declare const Progress: import("../../utils/forwardRef").FunctionComponentWithAs<"div", ProgressProps>;
export default Progress;
