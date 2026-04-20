import React, { useCallback, useEffect, useState } from 'react';
import { attemptFocus } from '../../utils/focusUtils';
import { useForkRef } from '../../utils/refUtils';
import { bindClassNames } from '../../utils/classNames';
import { forwardRefWithStatic } from '../../utils/forwardRef/forwardRefWithStatic';
import { ListItem } from '../List';
import { Menu } from './Menu';
import styles from './Menu.module.scss';
const cx = bindClassNames(styles);
const dropdownProps = {
    disablePortal: true,
    disableStacking: true,
    placement: 'right-start',
    triggerKeys: ['ArrowRight', 'ArrowLeft', 'Enter'],
};
/**
 * Renders a sub menu / nested menu that will open as a separate floating menu.
 *
 * It has the same rendering as a Menu, with additional interactions for opening/closing.
 *
 * To be used inside a `<Menu>` component.
 */
export const SubMenu = forwardRefWithStatic((props, ref) => {
    const { children, left, right, disabled, text, ...otherProps } = props;
    const [containerEl, setContainerEl] = useState(null);
    const [triggerRef, triggerMergedRef] = useForkRef(ref);
    const [open, setOpen] = useState(false);
    const handleClose = useCallback(() => {
        setOpen(false);
    }, [setOpen]);
    const handleOpen = useCallback(() => {
        setOpen(true);
    }, [setOpen]);
    useEffect(() => {
        function handleKeyDown(e) {
            if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
                attemptFocus(triggerRef.current, true);
                handleClose();
                e.preventDefault();
                e.stopPropagation();
            }
        }
        if (containerEl) {
            containerEl.addEventListener('keydown', handleKeyDown);
        }
        return () => {
            if (containerEl) {
                containerEl.removeEventListener('keydown', handleKeyDown);
            }
        };
    }, [containerEl, handleClose, triggerRef]);
    return (<Menu trigger={<ListItem tabIndex={-1} interactive ref={triggerMergedRef} left={left} disabled={disabled} role="menuitem" as="button" right={<>
                {right}
                <i className={cx('subMenuIcon', open && '--open', open && SubMenu.ICON_OPEN, !open && SubMenu.ICON_CLOSED)}/>
              </>}>
            {text}
          </ListItem>} tabIndex={undefined} open={open} onClose={handleClose} onOpen={handleOpen} ref={setContainerEl} dropdownProps={dropdownProps} {...otherProps}>
        {children}
      </Menu>);
});
SubMenu.ICON_OPEN = 'fi fi-rr-angle-right';
SubMenu.ICON_CLOSED = 'fi fi-rr-angle-right';
SubMenu.displayName = 'SubMenu';
export default SubMenu;
