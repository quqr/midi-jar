import React from 'react';
import { MergeProps } from '../../utils/typeUtils';
import { DropdownListProps, DropdownProps } from '../Dropdown';
type MenuOwnProps = {
    /**
     * The Menu trigger element
     */
    trigger?: DropdownProps['trigger'];
    /**
     * Controls the Menu open state.
     *
     * Menu is controlled internally if `undefined`
     */
    open?: boolean;
    /**
     * Callback fired when menu is closed
     */
    onClose?: () => void;
    /**
     * Callback fired when menu is open
     */
    onOpen?: () => void;
    /**
     * Optional anchor element used as a reference for the placement
     */
    anchorEl?: HTMLElement | null;
    /**
     * Optional trigger element to attache event to manage openning
     */
    triggerEl?: HTMLElement | null;
    /**
     * Props to pass to the Dropdown component used internally
     */
    dropdownProps?: Partial<Omit<DropdownProps, 'children'>>;
    /**
     * Content of the menu - should be MenuItem kind of elements
     */
    children?: React.ReactNode;
    /**
     * Query selector string allowing the menu to find his navagable items
     */
    itemQuerySelector?: string;
    /**
     * keep the menu opened on selection
     */
    keepOpened?: boolean;
};
type StringValueMenu = MenuOwnProps & {
    /**
     * The current value (or list of values) of menu
     */
    value?: string;
    /**
     * Callback fired when value changes
     */
    onChange?: (v: string) => void;
};
type ArrayValueMenu = MenuOwnProps & {
    value?: string[];
    onChange?: (v: string[]) => void;
};
export type MenuProps = MergeProps<StringValueMenu | ArrayValueMenu, DropdownListProps>;
/**
 * Renders a list of possible actions in a temporary floating box relative to a `trigger` element.
 *
 * Menu can contain any elements like MenuItem, Divider, MenuItemCheckbox, MenuItemRadio and SubMenu.
 *
 * Menu can be opened and controlled internally when a trigger is provided,
 * but can also be controlled externally.
 */
export declare const Menu: React.ForwardRefExoticComponent<(Omit<Omit<DropdownListProps, "onChange" | "value" | keyof MenuOwnProps> & MenuOwnProps & {
    /**
     * The current value (or list of values) of menu
     */
    value?: string;
    /**
     * Callback fired when value changes
     */
    onChange?: (v: string) => void;
}, "ref"> | Omit<Omit<DropdownListProps, "onChange" | "value" | keyof MenuOwnProps> & MenuOwnProps & {
    value?: string[];
    onChange?: (v: string[]) => void;
}, "ref">) & React.RefAttributes<HTMLDivElement>>;
export default Menu;
