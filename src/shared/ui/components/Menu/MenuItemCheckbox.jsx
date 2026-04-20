import React from 'react';
import { forwardRefWithAs } from '../../utils/forwardRef';
import { useEvent } from '../../hooks/useEvent';
import { ListItem } from '../List';
import { Checkbox } from '../Checkbox';
import { Switch } from '../Switch';
import { useMenu } from './MenuContext';
function addOrRemove(arr, value) {
    if (!Array.isArray(arr)) {
        if (typeof arr === 'string')
            return [arr, value];
        return [];
    }
    const index = arr.indexOf(value);
    if (index !== -1) {
        return [...arr.slice(0, index), ...arr.slice(index + 1)];
    }
    return [...arr, value];
}
/**
 * Renders a menu item with a checkbox on left, interactions and accessibility `menuitemcheckbox` role.
 *
 * To be used inside a `<Menu>` or `<SubMenu>` component.
 *
 * If the `value` matches the parent Menu `value`, the item is automatically `checked`.
 */
export const MenuItemCheckbox = forwardRefWithAs((props, ref) => {
    const { children, className, value, checked, onClick, as, variant = 'checkbox', checkboxProps, ...otherProps } = props;
    const { onChange: menuOnchange, value: selectedValue } = useMenu();
    const handleClick = useEvent((e) => {
        if (onClick)
            onClick(e);
        if (!value)
            return;
        const newValue = addOrRemove(selectedValue, value);
        if (menuOnchange)
            menuOnchange(newValue);
        if (menuOnchange && value)
            menuOnchange(newValue);
    });
    const isChecked = checked ?? (!!value && selectedValue?.includes(value));
    const CheckboxElement = variant === 'switch' ? Switch : Checkbox;
    return (<ListItem ref={ref} as={as || 'button'} tabIndex={-1} interactive onClick={handleClick} role="menuitemcheckbox" aria-checked={isChecked} className={className} {...otherProps} left={<CheckboxElement as="span" {...(checkboxProps || {})} checked={isChecked} role="presentation" tabIndex={-1}/>}>
      {children}
    </ListItem>);
});
MenuItemCheckbox.displayName = 'MenuItemCheckbox';
export default MenuItemCheckbox;
