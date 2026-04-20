import React from 'react';
export type FormControlLabelProps = {
    /**
     * The control label
     */
    label: React.ReactNode;
    /**
     * The hint text of the control
     */
    hint?: string;
    /**
     * The error text if the field is invalid
     */
    error?: string | null;
    /**
     * Specifies that the control is disabled
     */
    disabled?: boolean;
    /**
     * Puts the control after its label
     */
    reverse?: boolean;
    /**
     * The control to decorate
     */
    children?: React.ReactNode;
};
/**
 * Renders a label to decorate a nested `Checkbox`, `Radio` or `Switch` control.
 */
export declare const FormControlLabel: import("../../utils/forwardRef").FunctionComponentWithAs<"label", FormControlLabelProps>;
export default FormControlLabel;
