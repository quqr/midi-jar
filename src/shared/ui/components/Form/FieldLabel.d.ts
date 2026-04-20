import React from 'react';
export type FieldLabelProps = {
    /**
     * Specifies that the label is hidden (still available for screenreaders)
     */
    hide?: boolean;
    /**
     * Content of the label
     */
    children?: React.ReactNode;
};
/**
 * Renders a label for a field.
 *
 * Used internally by the FormField
 */
export declare const FieldLabel: import("../../utils/forwardRef").FunctionComponentWithAs<"div", FieldLabelProps>;
export default FieldLabel;
