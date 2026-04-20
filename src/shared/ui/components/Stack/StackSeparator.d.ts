import React from 'react';
export type StackSeparatorProps = {
    /**
     * Optionnal element to add the separator style to
     */
    children?: React.ReactNode;
};
/**
 * Renders a growing element to create space between elements in a Stack.
 */
export declare const StackSeparator: import("../../utils/forwardRef").FunctionComponentWithAs<"div", StackSeparatorProps>;
export default StackSeparator;
