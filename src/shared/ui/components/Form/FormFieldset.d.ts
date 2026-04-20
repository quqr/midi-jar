import React from 'react';
export type FormFieldsetProps = {
    /**
     * The fieldset label
     */
    label: React.ReactNode;
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
export declare const FormFieldset: import("../../utils/forwardRef").FunctionComponentWithAs<"fieldset", FormFieldsetProps>;
export default FormFieldset;
