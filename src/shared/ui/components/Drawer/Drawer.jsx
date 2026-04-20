import React from 'react';
import { bindClassNames } from '../../utils/classNames';
import { forwardRefWithAs } from '../../utils/forwardRef';
import { useCreatePortal } from '../../hooks/useCreatePortal';
import { usePopoverContainer } from '../../hooks/usePopover';
import { useAnimationDuration } from '../../hooks/useAnimationDuration';
import { ModalStack } from '../ModalStack';
import { useModalContainer } from '../ModalContainer';
import styles from './Drawer.module.scss';
const cx = bindClassNames(styles);
/* Props */
export const DrawerSizes = ['xs', 'sm', 'md', 'lg', 'xl'];
/**
 * Wraps any content in a floating Box attached to one side of the application, conditionally mounted & displayed.
 *
 * The open state must be controlled externally.
 */
export const Drawer = forwardRefWithAs((props, ref) => {
    const { as, open, onClose, children, className, noOverlay, size = 'sm', placement = 'left', overlayProps, animationProps = {}, ...otherProps } = props;
    const createPortal = useCreatePortal();
    const modalContainer = useModalContainer();
    const containerRef = usePopoverContainer({
        refocusOnClose: true,
        onClose,
        open,
    });
    const [show, onAnimationEnd] = useAnimationDuration(open, animationProps);
    const Element = as || 'div';
    return show
        ? createPortal(<ModalStack hideOnStack>
          <div className={cx('root', !!modalContainer && '--contained')} ref={ref}>
            <div {...(overlayProps || {})} role="presentation" className={cx('backdrop', open ? '--showBackdrop' : '--hideBackdrop', noOverlay && '--noOverlay', overlayProps?.className)}/>
            <Element role="dialog" aria-modal="true" ref={containerRef} onAnimationEnd={onAnimationEnd} className={cx(className, 'container', open ? '--show' : '--hide', size && `--${size}`, placement && `--${placement}`)} {...otherProps}>
              {children}
            </Element>
          </div>
        </ModalStack>, modalContainer)
        : null;
});
Drawer.displayName = 'Drawer';
export default Drawer;
