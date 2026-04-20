import React from 'react';
import { PropsWithAs } from '../../utils/typeUtils';
import { FormFieldContextValue } from './FormFieldContext';
import { FieldLabelProps } from './FieldLabel';
import { FieldHintProps } from './FieldHint';
type FormFieldRenderProp = (props: FormFieldContextValue) => React.ReactNode;
export type FormFieldProps = {
    /**
     * The hint label shown below the field
     */
    hint?: string;
    /**
     * The error label if the field is invalid
     */
    error?: string | null;
    /**
     * The field label
     */
    label: string;
    /**
     * Hides the label (still available for screenreaders)
     */
    hideLabel?: boolean;
    /**
     * Props to pass to the field hint or error
     */
    fieldHintProps?: Partial<PropsWithAs<'div', FieldHintProps>>;
    /**
     * Props to pass to the field label
     */
    fieldLabelProp?: Partial<PropsWithAs<'div', FieldLabelProps>>;
    /**
     * The field content, or a render function
     *
     * First argument of the render function is a `FormFieldContextValue`
     */
    children?: React.ReactNode | FormFieldRenderProp;
    /**
     * Make the field 100% width
     */
    block?: boolean;
};
/**
 * Renders a form field allowing to create accessible form field inputs with a field label.
 *
 * Pass a `Input` or `Select` input type component as a child of the `FormField` to decorate it and manage accessibility.
 */
export declare const FormField: import("../../utils/forwardRef").FunctionComponentWithAs<"label", FormFieldProps>;
export default FormField;
