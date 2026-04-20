import React from 'react';
import { bindClassNames } from '../../utils/classNames';
import { forwardRefWithAs } from '../../utils/forwardRef';
import styles from './Container.module.scss';
const cx = bindClassNames(styles);
/* Props */
export const ContainerSizes = ['sm', 'md', 'lg', 'xl'];
export const ContainerAlignments = ['center', 'left', 'right'];
/**
 * Wraps any element to keep it contained within a limited width.
 *
 * It ensures that the content keeps a predictable width even on wide screens.
 */
export const Container = forwardRefWithAs((props, ref) => {
    const { children, as, className, size = 'xl', align = 'center', ...otherProps } = props;
    const Element = as || 'div';
    return (<Element ref={ref} className={cx('root', size && `--${size}`, align && `--${align}`, className)} {...otherProps}>
      {children}
    </Element>);
});
Container.displayName = 'Container';
export default Container;
