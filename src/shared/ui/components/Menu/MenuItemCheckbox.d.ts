import { CheckboxProps } from '../Checkbox';
import type { MenuItemProps } from './MenuItem';
export type MenuItemCheckboxVariant = 'checkbox' | 'switch';
export type MenuItemCheckboxProps = Omit<MenuItemProps, 'value' | 'selected' | 'left'> & {
    /**
     * The component to use as the input component
     *
     * `checkbox`: the Checkbox component
     * `switch`: the Switch component
     */
    variant?: MenuItemCheckboxVariant;
    /**
     * The value of the checkbox item
     */
    value?: string;
    /**
     * Specifies that the checkbox is checked
     */
    checked?: boolean;
    /**
     * Props to pass to the Checkbox component used internally
     */
    checkboxProps?: CheckboxProps;
};
/**
 * Renders a menu item with a checkbox on left, interactions and accessibility `menuitemcheckbox` role.
 *
 * To be used inside a `<Menu>` or `<SubMenu>` component.
 *
 * If the `value` matches the parent Menu `value`, the item is automatically `checked`.
 */
export declare const MenuItemCheckbox: import("../../utils/forwardRef").FunctionComponentWithAs<"button", MenuItemCheckboxProps>;
export default MenuItemCheckbox;
