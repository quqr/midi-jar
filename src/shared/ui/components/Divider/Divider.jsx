import React from 'react';
import { bindClassNames } from '../../utils/classNames';
import { forwardRefWithAs } from '../../utils/forwardRef';
import styles from './Divider.module.scss';
const cx = bindClassNames(styles);
/* Props */
export const DividerAlignments = ['left', 'center', 'right'];
/**
 * Renders an horizontal line, used as a separator in lists.
 *
 * It can take children in order to display them inside the horizontal line.
 */
export const Divider = forwardRefWithAs((props, ref) => {
    const { className, as, children, align = 'center', ...otherProps } = props;
    const Element = as ?? (children ? 'div' : 'hr');
    return (<Element ref={ref} role="separator" aria-orientation="horizontal" className={cx('root', !!children && '--wrap', !!children && align && `--${align}`, className)} {...otherProps}>
      {children}
    </Element>);
});
Divider.displayName = 'Divider';
export default Divider;
