import React from 'react';
import { bindClassNames } from '../../utils/classNames';
import { forwardRefWithAs } from '../../utils/forwardRef';
import styles from './Skeleton.module.scss';
const cx = bindClassNames(styles);
/**
 * Renders a placeholder component for loading states.
 */
export const Skeleton = forwardRefWithAs((props, ref) => {
    const { as, className, width, height, style, shape, transparent, ...otherProps } = props;
    const Element = as || 'div';
    return (<Element aria-hidden="true" style={{
            ...(style || {}),
            minWidth: width,
            minHeight: height,
        }} ref={ref} className={cx('root', className, shape && `--${shape}`, transparent && '--transparent')} {...otherProps}/>);
});
Skeleton.displayName = 'Skeleton';
export default Skeleton;
