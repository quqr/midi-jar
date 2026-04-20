import React from 'react';
import { bindClassNames } from '../../utils/classNames';
import { forwardRefWithAs } from '../../utils/forwardRef';
import styles from './InputContainer.module.scss';
const cx = bindClassNames(styles);
/**
 * Renders an inner label in an InputContainer.
 *
 * Should be used in an InputGroup to prepend or append labels.
 */
export const InputContainerLabel = forwardRefWithAs(({ children, as, className, size = 'md', ...otherProps }, ref) => {
    const Element = as || 'div';
    return (<Element ref={ref} className={cx('label', size && `--${size}`, className)} {...otherProps}>
        {children}
      </Element>);
});
InputContainerLabel.displayName = 'InputContainerLabel';
export default InputContainerLabel;
