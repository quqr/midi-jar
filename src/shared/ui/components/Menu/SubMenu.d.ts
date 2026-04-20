import React from 'react';
import { MergeProps } from '../../utils/typeUtils';
import type { DropdownProps } from '../Dropdown';
import type { MenuItemProps } from './MenuItem';
import { MenuProps } from './Menu';
type SubMenuStatic = {
    /**
     * Icon when submenu is open
     */
    ICON_OPEN: string;
    /**
     * Icon when submenu is closed
     */
    ICON_CLOSED: string;
};
type SubMenuOwnProps = {
    /**
     * Content of the SubMenu item
     */
    text: React.ReactNode;
};
export type SubMenuProps = MergeProps<MenuProps, MenuItemProps & SubMenuOwnProps>;
/**
 * Renders a sub menu / nested menu that will open as a separate floating menu.
 *
 * It has the same rendering as a Menu, with additional interactions for opening/closing.
 *
 * To be used inside a `<Menu>` component.
 */
export declare const SubMenu: React.ForwardRefExoticComponent<(Omit<Omit<MenuItemProps & SubMenuOwnProps, string | number | symbol> & Omit<import("../Dropdown").DropdownListProps, "onChange" | "value" | keyof {
    trigger?: DropdownProps["trigger"];
    open?: boolean;
    onClose?: () => void;
    onOpen?: () => void;
    anchorEl?: HTMLElement | null;
    triggerEl?: HTMLElement | null;
    dropdownProps?: Partial<Omit<DropdownProps, "children">>;
    children?: React.ReactNode;
    itemQuerySelector?: string;
    keepOpened?: boolean;
}> & {
    trigger?: DropdownProps["trigger"];
    open?: boolean;
    onClose?: () => void;
    onOpen?: () => void;
    anchorEl?: HTMLElement | null;
    triggerEl?: HTMLElement | null;
    dropdownProps?: Partial<Omit<DropdownProps, "children">>;
    children?: React.ReactNode;
    itemQuerySelector?: string;
    keepOpened?: boolean;
} & {
    value?: string;
    onChange?: (v: string) => void;
}, "ref"> | Omit<Omit<MenuItemProps & SubMenuOwnProps, string | number | symbol> & Omit<import("../Dropdown").DropdownListProps, "onChange" | "value" | keyof {
    trigger?: DropdownProps["trigger"];
    open?: boolean;
    onClose?: () => void;
    onOpen?: () => void;
    anchorEl?: HTMLElement | null;
    triggerEl?: HTMLElement | null;
    dropdownProps?: Partial<Omit<DropdownProps, "children">>;
    children?: React.ReactNode;
    itemQuerySelector?: string;
    keepOpened?: boolean;
}> & {
    trigger?: DropdownProps["trigger"];
    open?: boolean;
    onClose?: () => void;
    onOpen?: () => void;
    anchorEl?: HTMLElement | null;
    triggerEl?: HTMLElement | null;
    dropdownProps?: Partial<Omit<DropdownProps, "children">>;
    children?: React.ReactNode;
    itemQuerySelector?: string;
    keepOpened?: boolean;
} & {
    value?: string[];
    onChange?: (v: string[]) => void;
}, "ref">) & React.RefAttributes<HTMLLIElement>> & SubMenuStatic;
export default SubMenu;
