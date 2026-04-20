import React from 'react';
export type MenuItemProps = {
    /**
     * Content on the left of the item
     */
    left?: React.ReactNode;
    /**
     * Content on the right of the item
     */
    right?: React.ReactNode;
    /**
     * Specifies that the item is selected
     */
    selected?: boolean;
    /**
     * Disables the item and its interactions
     */
    disabled?: boolean;
    /**
     * An optional value associated to the item
     *
     * If specified on an item inside a Menu with a value,
     * the selected state will be automatically managed.
     */
    value?: string;
    /**
     * Callback fired when user clicks on item or press enter
     */
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
    /**
     * Callback fired when user presses a key
     */
    onKeyDown?: (e: React.KeyboardEvent<HTMLElement>) => void;
    /**
     * Content of the item
     */
    children?: React.ReactNode;
};
/**
 * Renders a menu item with interactions and accessibility `menuitem` role.
 *
 * To be used inside a `<Menu>` or `<SubMenu>` component.
 *
 * If the `value` matches the parent Menu `value`, the item is automatically `selected`.
 */
export declare const MenuItem: import("../../utils/forwardRef").FunctionComponentWithAs<"button", MenuItemProps>;
export default MenuItem;
