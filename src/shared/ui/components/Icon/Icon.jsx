import React from 'react';
import { bindClassNames } from '../../utils/classNames';
import { forwardRefWithAs } from '../../utils/forwardRef';
import styles from './Icon.module.scss';
const cx = bindClassNames(styles);
/* Props */
export const IconSizes = ['auto', 'lg', 'md', 'sm'];
export const IconIntents = [
    'default',
    'subtle',
    'contrast',
    'neutral',
    'primary',
    'secondary',
    'danger',
    'warning',
    'success',
    'inherit',
];
/**
 * Renders an icon with icon classes and standardized styling
 */
export const Icon = forwardRefWithAs((props, ref) => {
    const { name, intent = 'inherit', size = 'auto', spin, className, as, ...otherProps } = props;
    const Element = as || Icon.IconComponent;
    return (<Element ref={ref} role="img" className={cx('root', intent && `--${intent}`, size && `--${size}`, spin && `--spin`, name, className)} aria-hidden={otherProps?.['aria-label'] ? 'false' : 'true'} name={Element !== 'i' ? name : undefined} {...otherProps}/>);
});
Icon.IconComponent = 'i';
Icon.displayName = 'Icon';
export default Icon;
