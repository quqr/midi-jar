import React from 'react';
import { bindClassNames } from '../../utils/classNames';
import { forwardRefWithAs } from '../../utils/forwardRef';
import styles from './Typography.module.scss';
const cx = bindClassNames(styles);
/* Props */
export const TypographyWeights = ['light', 'regular', 'bold'];
export const TypographySizes = ['lg', 'md', 'sm'];
/**
 * Wraps any content, with typographic styling.
 */
export const Typography = forwardRefWithAs((props, ref) => {
    const { className, children, as, align, size = 'md', weight = 'light', intent = 'inherit', ...otherProps } = props;
    const Element = as || 'div';
    return (<Element ref={ref} className={cx('root', `${size}--${weight}`, align && `--${align}`, intent && `--${intent}`, [
            className,
        ])} {...otherProps}>
      {children}
    </Element>);
});
Typography.displayName = 'Typography';
export default Typography;
