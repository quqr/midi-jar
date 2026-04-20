import React from 'react';
export declare const StackDirections: readonly ["horizontal", "vertical"];
export declare const StackAligns: readonly ["center", "end", "start", "stretch"];
export declare const StackJustifies: readonly ["center", "end", "start", "stretch", "space-around", "space-between", "space-evenly"];
export declare const StackGaps: readonly ["xs", "sm", "md", "lg", "xl"];
export type StackDirection = (typeof StackDirections)[number];
export type StackJustify = (typeof StackJustifies)[number];
export type StackAlign = (typeof StackAligns)[number];
export type StackGap = (typeof StackGaps)[number];
export type StackProps = {
    /**
     * Specifies if the elements should wrap (`flex-wrap` behaviour)
     */
    wrap?: boolean;
    /**
     * Specifies how the elements should be aligned (`align-items` behaviour)
     */
    align?: StackAlign;
    /**
     * Specifies how the content should be justified (`justify-content` behaviour)
     */
    justify?: StackJustify;
    /**
     * The space between elements (in tee shirt size)
     */
    gap?: StackGap;
    /**
     * The direction of the stack
     */
    direction?: StackDirection;
    /**
     * Makes the stack take the whole available width
     */
    block?: boolean;
    /**
     * Makes the stach element take all available space equally
     */
    stretch?: boolean;
    /**
     * The stack content
     */
    children?: React.ReactNode;
};
/**
 * Wraps and arranges a stack of items.
 *
 * This component use the most common flex box positioning
 */
export declare const Stack: import("../../utils/forwardRef").FunctionComponentWithAs<"div", StackProps>;
export default Stack;
