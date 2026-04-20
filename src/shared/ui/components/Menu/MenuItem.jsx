import React from 'react';
import { forwardRefWithAs } from '../../utils/forwardRef';
import { useEvent } from '../../hooks/useEvent';
import { useDropdown } from '../Dropdown';
import { ListItem } from '../List';
import { useMenu } from './MenuContext';
/**
 * Renders a menu item with interactions and accessibility `menuitem` role.
 *
 * To be used inside a `<Menu>` or `<SubMenu>` component.
 *
 * If the `value` matches the parent Menu `value`, the item is automatically `selected`.
 */
export const MenuItem = forwardRefWithAs(({ children, onClick, as, value, selected, ...props }, ref) => {
    const { value: selectedValue, onChange: menuOnChange, keepOpened } = useMenu();
    const closeDropdown = useDropdown();
    const onChange = useEvent(() => {
        if (menuOnChange && value)
            menuOnChange(value);
    });
    const handleClick = useEvent((e) => {
        if (onClick)
            onClick(e);
        if (closeDropdown && !keepOpened) {
            closeDropdown({
                bubble: true,
                refocus: true,
            });
        }
        if (onChange)
            onChange();
    });
    const isSelected = selected ?? (!!value && value === selectedValue);
    return (<ListItem ref={ref} as={as || 'button'} role="menuitem" tabIndex={-1} interactive onClick={handleClick} selected={isSelected} {...props}>
        {children}
      </ListItem>);
});
MenuItem.displayName = 'MenuItem';
export default MenuItem;
