import { MergeProps } from '../../utils/typeUtils';
import { ButtonIntent, ButtonVariant, ButtonProps } from '../Button';
export type ToggleButtonProps = MergeProps<{
    /**
     * Specifies that the button is selected
     */
    selected?: boolean;
    /**
     * The color intent to apply when selected
     */
    selectedIntent?: ButtonIntent;
    /**
     * The stylistic variant to apply when selected
     */
    selectedVariant?: ButtonVariant;
}, ButtonProps>;
/**
 * Renders a Button with an aditionnal pressed state controlled with the `selected` prop.
 *
 * This component accept all the props of the `Button` component, minus the `variant` and `intent` that depends on the selected state.
 */
export declare const ToggleButton: import("../../utils/forwardRef").FunctionComponentWithAs<"button", ToggleButtonProps>;
export default ToggleButton;
