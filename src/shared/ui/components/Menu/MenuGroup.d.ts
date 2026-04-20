import React from 'react';
import { ListGroupProps } from '../List';
export type MenuGroupProps = Omit<ListGroupProps, 'listAs'>;
/**
 * Renders a menu group containing other menu items and with a
 *
 * To be used inside a `<Menu>` or `<SubMenu>` component.
 */
export declare const MenuGroup: React.ForwardRefExoticComponent<MenuGroupProps & React.RefAttributes<HTMLDivElement>>;
export default MenuGroup;
