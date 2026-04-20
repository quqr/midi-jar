import React from 'react';
export declare const InputGroupDirections: readonly ["horizontal", "vertical"];
export type InputGroupDirection = (typeof InputGroupDirections)[number];
export type InputGroupProps = {
    /**
     * The direction of the stacked input elements
     */
    direction?: InputGroupDirection;
    /**
     * Makes the inputs in group take all available space equally
     */
    stretch?: boolean;
    /**
     * Makes the group take the whole available width
     */
    block?: boolean;
    /**
     * The inputs in group - should be elements using InputContainer
     */
    children?: React.ReactNode;
};
/**
 * Wraps a set of inputs relative to each other.
 *
 * You can mix any elements wrapped with InputContainer, InputContainerLabel and Button.
 */
export declare const InputGroup: import("../../utils/forwardRef").FunctionComponentWithAs<"div", InputGroupProps>;
export default InputGroup;
