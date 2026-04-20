import React from 'react';
import { bindClassNames } from '../../utils/classNames';
import { forwardRefWithAs } from '../../utils/forwardRef';
import styles from './Modal.module.scss';
const cx = bindClassNames(styles);
/**
 * Wraps the footer of a modal.
 *
 * Must be used inside a Modal component.
 */
export const ModalActions = forwardRefWithAs((props, ref) => {
    const { children, className, direction = 'auto', as, ...otherProps } = props;
    const Element = as || 'footer';
    return (<Element ref={ref} className={cx('actions', className, direction && `actions--${direction}`)} {...otherProps}>
      {children}
    </Element>);
});
ModalActions.displayName = 'ModalActions';
export default ModalActions;
