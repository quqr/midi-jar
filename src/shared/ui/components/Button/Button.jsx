import React from 'react';
import { bindClassNames } from '../../utils/classNames';
import { forwardRefWithAs } from '../../utils/forwardRef';
import styles from './Button.module.scss';
const cx = bindClassNames(styles);
/* Props */
export const ButtonSizes = ['sm', 'md', 'lg'];
export const ButtonVariants = ['filled', 'outlined', 'ghost'];
export const ButtonIntents = [
    'neutral',
    'primary',
    'secondary',
    'danger',
    'warning',
    'success',
];
/**
 * Renders a button with semantic intent and stylistic variant, with any element on the sides of it (e.g.: icons).
 */
export const Button = forwardRefWithAs((props, ref) => {
    const { size = 'md', variant = 'filled', intent = 'primary', className, as, children, left, right, icon = false, rounded = false, block = false, hoverIntent, type: propType, ...otherProps } = props;
    const Element = as || 'button';
    const type = propType ?? Element === 'button' ? 'button' : undefined;
    return (<Element ref={ref} type={type} className={cx('root', icon && `--icon`, rounded && `--rounded`, size && `--${size}`, variant && `--${variant}`, intent && `--${intent}`, block && '--block', hoverIntent && '--hoverIntent', className)} {...otherProps}>
      {left}
      {typeof children === 'string' ? <span className={cx('label')}>{children}</span> : children}
      {right}
    </Element>);
});
Button.displayName = 'Button';
export default Button;
