import React from 'react';
import { bindClassNames } from '../../utils/classNames';
import { forwardRefWithAs } from '../../utils/forwardRef';
import { Box } from '../Box';
import styles from './Toolbar.module.scss';
const cx = bindClassNames(styles);
/**
 * Renders a bar sticked to the top of the page, with customizable styling.
 */
export const Toolbar = forwardRefWithAs((props, ref) => {
    const { children, className, position = 'relative', placement = 'top', elevation = 1, ...otherProps } = props;
    return (<Box ref={ref} className={cx('root', position && `--${position}`, placement && `--${placement}`, className)} elevation={elevation} {...otherProps}>
      {children}
    </Box>);
});
Toolbar.displayName = 'Toolbar';
export default Toolbar;
