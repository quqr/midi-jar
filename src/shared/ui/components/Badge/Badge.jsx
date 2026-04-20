import React from 'react';
import { bindClassNames } from '../../utils/classNames';
import { forwardRefWithAs } from '../../utils/forwardRef';
import styles from './Badge.module.scss';
const cx = bindClassNames(styles);
/* Props */
export const BadgeSizes = ['sm', 'md', 'lg'];
export const BadgeIntents = [
    'neutral',
    'primary',
    'secondary',
    'error',
    'warning',
    'success',
];
/**
 * Renders a pill with a text, and any elements on the sides of it (e.g. icons).
 */
export const Badge = forwardRefWithAs((props, ref) => {
    const { intent = 'neutral', size = 'md', className, children, right, left, as, ...otherProps } = props;
    const Element = as || 'div';
    return (<Element ref={ref} className={cx('root', intent && `--${intent}`, size && `--${size}`, className)} {...otherProps}>
      {left}
      {children && <div className={cx('label')}>{children}</div>}
      {right}
    </Element>);
});
Badge.displayName = 'Badge';
export default Badge;
