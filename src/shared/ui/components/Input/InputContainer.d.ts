import React from 'react';
type InputContainerStatic = {
    /**
     * Icon when input has errors
     */
    ICON_ERROR: string;
};
export declare const InputSizes: readonly ["sm", "md", "lg"];
export type InputSize = (typeof InputSizes)[number];
export type InputContainerProps = {
    /**
     * Specifies that the wrapped input is disabled
     */
    disabled?: boolean;
    /**
     * Specifies that the wrapped input has error
     */
    error?: string | null | boolean;
    /**
     * Content to the left of the wrapped input
     */
    left?: React.ReactNode;
    /**
     * Content to the right of the wrapped input
     */
    right?: React.ReactNode;
    /**
     * Specifies that the wrapped input is focused.
     *
     * NOTE: it does not focus the input itself.
     */
    focused?: boolean;
    /**
     * Makes the container take the whole available width
     */
    block?: boolean;
    /**
     * The input size (in teeshirt size)
     * */
    size?: InputSize;
    /**
     * The wrapped input
     */
    children?: React.ReactNode;
};
/**
 * Renders the container for an input.
 *
 * Should be used to decorate inputs with stylistic variants and states.
 */
export declare const InputContainer: import("../../utils/forwardRef").FunctionComponentWithAs<"div", InputContainerProps> & InputContainerStatic;
export default InputContainer;
