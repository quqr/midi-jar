import React from 'react';
import { PropsWithAs } from '../../utils/typeUtils';
type CheckboxStatic = {
    /**
     * Icon when checked
     */
    ICON_CHECKED: string;
    /**
     * Icon when indeterminate
     */
    ICON_INDETERMINATE: string;
};
export type CheckboxProps = {
    /**
     * Specifies that the checkbox is checked
     */
    checked?: boolean;
    /**
     * Specifies that the checkbox (when checked) targets elements partially checked
     */
    indeterminate?: boolean;
    /**
     * Disables the checkbox and all its interactions
     */
    disabled?: boolean;
    /**
     * Props to pass to the root container element.
     *
     * NOTE: rest of props are passed to the input element
     */
    wrapperProps?: PropsWithAs<React.ElementType, React.ComponentProps<'div'>>;
    /**
     * Callback when the checkbox state changes.
     *
     * First argument is the state as a `boolean`, second argument is the raw event of the input.
     */
    onChange?: (value: boolean, event?: React.ChangeEvent<HTMLInputElement>) => void;
};
/**
 * Renders a checkbox element as a decorated input element, and `onChange` callback with boolean value.
 *
 * Checked state takes priority over the Indeterminate state.
 *
 * > All props passed to it will be passed to the input element,
 * > use the `wrapperProps` prop to pass props specifically to the wrapper root element.
 */
export declare const Checkbox: import("../../utils/forwardRef").FunctionComponentWithAs<"input", CheckboxProps> & CheckboxStatic;
export default Checkbox;
