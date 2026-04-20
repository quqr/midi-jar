import React from 'react';
import { bindClassNames } from '../../utils/classNames';
import { forwardRefWithAs } from '../../utils/forwardRef';
import styles from './Dot.module.scss';
const cx = bindClassNames(styles);
/* Props */
export const DotSizes = ['sm', 'md', 'lg'];
export const DotIntents = [
    'neutral',
    'primary',
    'secondary',
    'error',
    'warning',
    'success',
];
/**
 * Renders an Dot with an active state to highlight updates or status
 */
export const Dot = forwardRefWithAs((props, ref) => {
    const { as, className, intent = 'neutral', size = 'md', active, ...otherProps } = props;
    const Element = as || 'span';
    return (<Element ref={ref} className={cx('root', intent && `--${intent}`, size && `--${size}`, active && `--active`, className)} aria-hidden={otherProps?.['aria-label'] ? 'false' : 'true'} {...otherProps}/>);
});
Dot.displayName = 'Dot';
export default Dot;
