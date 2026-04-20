import React, { forwardRef } from 'react';
import { bindClassNames } from '../../utils/classNames';
import { forwardRefWithAs } from '../../utils/forwardRef';
import { List } from '../List';
import { Box } from '../Box';
import styles from './Dropdown.module.scss';
const cx = bindClassNames(styles);
/**
 * Wrapper around List component that define a 'div' default as prop
 */
const DivList = forwardRef(({ children, listAs, ...props }, ref) => {
    return (<List ref={ref} {...props} as={listAs || 'div'}>
      {children}
    </List>);
});
DivList.displayName = 'DropdownDivList';
export const DropdownList = forwardRefWithAs((props, ref) => {
    const { children, className, tabIndex = -1, as, elevation = 1, outlined = true, ...otherProps } = props;
    return (<Box as={DivList} listAs={as} ref={ref} tabIndex={tabIndex} className={cx('list', className)} elevation={elevation} outlined={outlined} {...otherProps}>
      {children}
    </Box>);
});
DropdownList.displayName = 'DropdownList';
export default DropdownList;
