import React from 'react';
import { MergeProps } from '../../utils/typeUtils';
import { MenuProps } from '../Menu';
export type ContextMenuProps = MergeProps<{
    /**
     * The element triggering the contextual menu (default to document)
     */
    triggerEl?: HTMLElement | null;
}, MenuProps>;
/**
 * A `Menu` component that trigger specifically on right click.
 */
export declare const ContextMenu: React.ForwardRefExoticComponent<(Omit<Omit<Omit<import("..").DropdownListProps, "onChange" | "value" | keyof {
    trigger?: import("..").DropdownProps["trigger"];
    open?: boolean;
    onClose?: () => void;
    onOpen?: () => void;
    anchorEl?: HTMLElement | null;
    triggerEl?: HTMLElement | null;
    dropdownProps?: Partial<Omit<import("..").DropdownProps, "children">>;
    children?: React.ReactNode;
    itemQuerySelector?: string;
    keepOpened?: boolean;
}> & {
    trigger?: import("..").DropdownProps["trigger"];
    open?: boolean;
    onClose?: () => void;
    onOpen?: () => void;
    anchorEl?: HTMLElement | null;
    triggerEl?: HTMLElement | null;
    dropdownProps?: Partial<Omit<import("..").DropdownProps, "children">>;
    children?: React.ReactNode;
    itemQuerySelector?: string;
    keepOpened?: boolean;
} & {
    value?: string;
    onChange?: (v: string) => void;
}, "triggerEl"> & {
    /**
     * The element triggering the contextual menu (default to document)
     */
    triggerEl?: HTMLElement | null;
}, "ref"> | Omit<Omit<Omit<import("..").DropdownListProps, "onChange" | "value" | keyof {
    trigger?: import("..").DropdownProps["trigger"];
    open?: boolean;
    onClose?: () => void;
    onOpen?: () => void;
    anchorEl?: HTMLElement | null;
    triggerEl?: HTMLElement | null;
    dropdownProps?: Partial<Omit<import("..").DropdownProps, "children">>;
    children?: React.ReactNode;
    itemQuerySelector?: string;
    keepOpened?: boolean;
}> & {
    trigger?: import("..").DropdownProps["trigger"];
    open?: boolean;
    onClose?: () => void;
    onOpen?: () => void;
    anchorEl?: HTMLElement | null;
    triggerEl?: HTMLElement | null;
    dropdownProps?: Partial<Omit<import("..").DropdownProps, "children">>;
    children?: React.ReactNode;
    itemQuerySelector?: string;
    keepOpened?: boolean;
} & {
    value?: string[];
    onChange?: (v: string[]) => void;
}, "triggerEl"> & {
    /**
     * The element triggering the contextual menu (default to document)
     */
    triggerEl?: HTMLElement | null;
}, "ref">) & React.RefAttributes<HTMLDivElement>>;
export default ContextMenu;
