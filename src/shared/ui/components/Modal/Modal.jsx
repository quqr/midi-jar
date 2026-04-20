import React, { useMemo, useState } from 'react';
import { bindClassNames } from '../../utils/classNames';
import { forwardRefWithAs } from '../../utils/forwardRef';
import { useMergeRef } from '../../utils/refUtils';
import { usePopoverContainer } from '../../hooks/usePopover';
import { useCreatePortal } from '../../hooks/useCreatePortal';
import { useAnimationDuration } from '../../hooks/useAnimationDuration';
import { ModalStack } from '../ModalStack';
import { useModalContainer } from '../ModalContainer';
import { ModalContext } from './ModalContext';
import styles from './Modal.module.scss';
const cx = bindClassNames(styles);
/* Props */
export const ModalSizes = ['sm', 'md', 'lg', 'xl', 'fullscreen'];
/**
 * Wraps any content in a floating Box centered in the application, conditionally mounted & displayed.
 *
 * Should be used contextually to give more information or gather additional info following a user action.
 *
 * Can contain ModalHeader, ModalContent and ModalActions.
 *
 * The open state must be controlled externally.
 */
export const Modal = forwardRefWithAs((props, ref) => {
    const { as, children, open, onClose, dialogProps, noOverlay, overlayProps, className, size, disablePortal, disableAutoFocus, animationProps = {}, ...otherProps } = props;
    const Element = as || 'div';
    const createPortal = useCreatePortal(disablePortal);
    const modalContainer = useModalContainer();
    const containerRef = usePopoverContainer({
        refocusOnClose: true,
        autoFocus: !disableAutoFocus,
        onClose,
        open,
    });
    const [dialogEl, dialogRef] = useState();
    const mergedDialogRef = useMergeRef(containerRef, dialogProps?.ref, dialogRef);
    const [show, onAnimationEnd] = useAnimationDuration(open, {
        onAnimationEnd: dialogProps?.onAnimationEnd,
        ...animationProps,
    });
    const modalContextValue = useMemo(() => ({
        onClose,
        dialogEl,
    }), [onClose, dialogEl]);
    return show
        ? createPortal(<ModalContext.Provider value={modalContextValue}>
          <ModalStack hideOnStack>
            <Element {...otherProps} className={cx('root', !!modalContainer && '--contained', size && `--${size}`, open ? '--show' : '--hide', className)} ref={ref}>
              <div {...(overlayProps || {})} role="presentation" className={cx('backdrop', noOverlay && '--noOverlay', overlayProps?.className)}/>
              <div {...(dialogProps || {})} role="dialog" aria-modal="true" ref={mergedDialogRef} onAnimationEnd={onAnimationEnd} className={cx('container', dialogProps?.className)}>
                {children}
              </div>
            </Element>
          </ModalStack>
        </ModalContext.Provider>, modalContainer)
        : null;
});
Modal.displayName = 'Modal';
export default Modal;
