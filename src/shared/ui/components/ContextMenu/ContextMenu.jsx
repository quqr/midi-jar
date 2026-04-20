import React, { forwardRef, useCallback, useEffect, useRef, useState } from 'react';
import { Menu } from '../Menu';
/**
 * A `Menu` component that trigger specifically on right click.
 */
export const ContextMenu = forwardRef((props, ref) => {
    const { children, triggerEl, ...otherProps } = props;
    const [open, setOpen] = useState(false);
    const [position, setPosition] = useState(null);
    const [anchor, setAnchor] = useState(null);
    const closing = useRef(false);
    useEffect(() => {
        const currentTrigger = triggerEl || document;
        function handleContextClick(e) {
            e.preventDefault();
            e.stopPropagation();
            if (!open && !closing.current) {
                setPosition({
                    x: e.clientX,
                    y: e.clientY,
                });
                setOpen(true);
            }
        }
        currentTrigger.addEventListener('contextmenu', handleContextClick);
        return () => {
            currentTrigger.removeEventListener('contextmenu', handleContextClick);
        };
    }, [triggerEl, open]);
    const handleClose = useCallback(() => {
        closing.current = true;
        setOpen(false);
    }, []);
    const handleAnimationEnd = useCallback(() => {
        if (!open) {
            setPosition(null);
            closing.current = false;
        }
    }, [open]);
    return (<>
      <div ref={setAnchor} style={{
            height: 0,
            width: 0,
            opacity: 0,
            position: 'fixed',
            left: position?.x,
            top: position?.y,
        }}/>
      <Menu open={open && !!anchor} anchorEl={anchor} onClose={handleClose} ref={ref} {...otherProps} dropdownProps={{
            placement: 'bottom-start',
            onAnimationEnd: handleAnimationEnd,
        }}>
        {children}
      </Menu>
    </>);
});
ContextMenu.displayName = 'ContextMenu';
export default ContextMenu;
