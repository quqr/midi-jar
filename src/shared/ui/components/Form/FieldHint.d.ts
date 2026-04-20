import React from 'react';
export type FieldHintProps = {
    /**
     * The hint text content
     */
    hint?: React.ReactNode;
    /**
     * The error to be rendered instead of a hint
     */
    error?: React.ReactNode;
};
/**
 * Renders a hint or error for a field.
 *
 * Used internally by the FormField
 */
export declare const FieldHint: import("../../utils/forwardRef").FunctionComponentWithAs<"div", FieldHintProps>;
export default FieldHint;
