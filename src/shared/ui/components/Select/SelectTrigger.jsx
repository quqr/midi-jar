import React from 'react';
import { bindClassNames } from '../../utils/classNames';
import { forwardRefWithStatic } from '../../utils/forwardRef';
import { Input } from '../Input';
import { Icon } from '../Icon';
import styles from './Select.module.scss';
const cx = bindClassNames(styles);
/**
 * Trigger input for the Select component
 */
export const SelectTrigger = forwardRefWithStatic((props, ref) => {
    const { open, value = '', disabled, className, size, placeholder, containerProps, ...otherProps } = props;
    return (<Input disabled={disabled} size={size} containerProps={{
            focused: open,
            role: 'combobox',
            ...containerProps,
        }} right={<Icon name={open ? SelectTrigger.ICON_OPEN : SelectTrigger.ICON_CLOSED} aria-hidden="true"/>} className={cx('root', className)} aria-haspopup="listbox" aria-placeholder={placeholder}>
      <input ref={ref} disabled={disabled} value={value} readOnly placeholder={placeholder} {...otherProps}/>
    </Input>);
});
SelectTrigger.displayName = 'SelectTrigger';
SelectTrigger.ICON_OPEN = 'fi fi-rr-angle-up';
SelectTrigger.ICON_CLOSED = 'fi fi-rr-angle-down';
export default SelectTrigger;
