import { RadioProps } from '../Radio';
import type { MenuItemProps } from './MenuItem';
export type MenuItemRadioProps = Omit<MenuItemProps, 'value' | 'selected' | 'left'> & {
    /**
     * The value of the radio item
     */
    value?: string;
    /**
     * Specifies that the radio is checked
     */
    checked?: boolean;
    /**
     * Props to pass to the Radio component used internally
     */
    radioProps?: RadioProps;
};
/**
 * Renders a menu item with a radio on left, interactions and accessibility `menuitemradio` role.
 *
 * To be used inside a `<Menu>` or `<SubMenu>` component.
 *
 * If the `value` matches the parent Menu `value`, the item is automatically `checked`.
 */
export declare const MenuItemRadio: import("../../utils/forwardRef").FunctionComponentWithAs<"button", MenuItemRadioProps>;
export default MenuItemRadio;
