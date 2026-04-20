import React from 'react';
import { forwardRefWithAs } from '../../utils/forwardRef';
import { bindClassNames } from '../../utils/classNames';
import { useEvent } from '../../hooks/useEvent';
import { ListItem } from '../List';
import { Icon } from '../Icon';
import { useOptionEvents } from './useOptionEvents';
import styles from './Select.module.scss';
const cx = bindClassNames(styles);
/**
 * Renders an option for a list of selectable options.
 *
 * To be used inside a Select component, by the `children` rendre function
 */
export const SelectOption = forwardRefWithAs((props, ref) => {
    const { as, value, label, onClick, onSelect, children, selected, onKeyDown, className, ...otherProps } = props;
    const onChange = useEvent(() => {
        if (onSelect && value !== undefined) {
            onSelect(value);
        }
    });
    const { handleKeyDown, handleClick } = useOptionEvents({
        onChange,
        onKeyDown,
        onClick,
    });
    return (<ListItem aria-label={label} ref={ref} tabIndex={-1} className={cx('option', className)} as={as || 'li'} role="option" interactive onKeyDown={handleKeyDown} onClick={handleClick} selected={selected} right={selected && <Icon name={SelectOption.ICON_SELECTED}/>} {...otherProps}>
      {children}
    </ListItem>);
});
SelectOption.ICON_SELECTED = 'fi fi-rr-check';
SelectOption.displayName = 'SelectOption';
export default React.memo(SelectOption);
