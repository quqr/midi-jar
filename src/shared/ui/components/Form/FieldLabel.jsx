import React from 'react';
import { bindClassNames } from '../../utils/classNames';
import { forwardRefWithAs } from '../../utils/forwardRef';
import styles from './FormField.module.scss';
const cx = bindClassNames(styles);
/**
 * Renders a label for a field.
 *
 * Used internally by the FormField
 */
export const FieldLabel = forwardRefWithAs((props, ref) => {
    const { children, as, className, hide, ...otherProps } = props;
    const Element = as || 'div';
    return (<Element ref={ref} className={cx('label', hide && 'label--hide', className)} {...otherProps}>
      {children}
    </Element>);
});
FieldLabel.displayName = 'FieldLabel';
export default FieldLabel;
