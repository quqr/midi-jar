import React from 'react';
import { bindClassNames } from '../../utils/classNames';
import { forwardRefWithAs } from '../../utils/forwardRef';
import styles from './Box.module.scss';
const cx = bindClassNames(styles);
/* Props */
export const BoxElevations = [0, 1, 2, 3];
export const BoxPads = ['xs', 'sm', 'md', 'lg', 'xl'];
/**
 * Wraps any content in a Box with styling (elevation, outline, overflow, variants...).
 *
 * Used as a basic block for other components with shared style / semantic.
 */
export const Box = forwardRefWithAs((props, ref) => {
    const { as, className, pad = undefined, elevation = 0, children, outlined, hideOverflow, ...otherProps } = props;
    const Element = as || 'div';
    return (<Element ref={ref} className={cx(styles.root, outlined && '--outlined', elevation && `--elevation${elevation}`, pad && `--pad-${pad}`, hideOverflow && '--hideOverflow', className)} {...otherProps}>
      {children}
    </Element>);
});
Box.displayName = 'Box';
export default Box;
