import React from 'react';
import { bindClassNames } from '../../utils/classNames';
import { forwardRefWithAs } from '../../utils/forwardRef';
import styles from './Grid.module.scss';
const cx = bindClassNames(styles);
/* Props */
export const GridSizes = ['sm', 'md', 'lg'];
export const GridGaps = ['xs', 'sm', 'md', 'lg', 'xl'];
/**
 * Wraps elements in a grid.
 */
export const Grid = forwardRefWithAs((props, ref) => {
    const { children, as, className, gap, size = 'md', ...otherProps } = props;
    const Element = as || 'div';
    return (<Element ref={ref} className={cx('root', gap && `--gap-${gap}`, size && `col--${size}`, className)} {...otherProps}>
      {children}
    </Element>);
});
Grid.displayName = 'Grid';
export default Grid;
