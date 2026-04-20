import React from 'react';
import { PropsWithAs } from '../../utils/typeUtils';
type SwitchStatic = {
    ICON_CHECKED: string;
    ICON_UNCHECKED: string;
};
export type SwitchProps = {
    /**
     * Specifies that the switch is checked
     */
    checked?: boolean;
    /**
     * Disables the switch and all its interactions
     */
    disabled?: boolean;
    /**
     * Props to pass to the root container element.
     *
     * NOTE: rest of props are passed to the input element
     */
    wrapperProps?: PropsWithAs<React.ElementType, React.ComponentProps<'div'>>;
    /**
     * Callback when the switch state changes.
     *
     * First argument is the state as a `boolean`, second argument is the raw event of the input.
     */
    onChange?: (value: boolean, event?: React.ChangeEvent<HTMLInputElement>) => void;
};
/**
 * Renders a toggleable switch element as a decorated input element, and `onChange` callback with boolean value.
 *
 * > All props passed to it will be passed to the input element,
 * > use the `wrapperProps` prop to pass props specifically to the wrapper root element.
 */
export declare const Switch: import("../../utils/forwardRef").FunctionComponentWithAs<"input", SwitchProps> & SwitchStatic;
export default Switch;
