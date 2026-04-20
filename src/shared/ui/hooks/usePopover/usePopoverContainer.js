import { useEffect, useRef } from 'react';
import { modalStack } from '../../components/ModalStack';
import { attemptFocus, focusFirstDescendant, getFirstFocusableDescendant, getLastFocusableDescendant, isOutside, } from '../../utils/focusUtils';
import useRefEffect from '../useRefEffect';
import useEvent from '../useEvent';
const NOP = () => undefined;
/**
 * Focus the given trigger element of his first focusable child
 * @param element the element to focus
 */
function focusTrigger(element) {
    if (!element)
        return;
    if (!attemptFocus(element, true)) {
        focusFirstDescendant(element, true);
    }
}
/**
 * Hook used to manage the accessibility of a
 * popover type of component
 */
export function usePopoverContainer(options) {
    const { open, onClose, triggerEl, closeOnTab, refocusOnClose, autoFocus = true, disableFocusTrap, } = options;
    const containerRef = useRef(null);
    // non-reactive onClose copy
    const handleClose = useEvent(onClose || NOP);
    const triggerRef = useRef(null);
    useEffect(() => {
        // saving active trigger element if not provided
        if (open) {
            triggerRef.current = triggerEl ?? document.activeElement;
        }
        else if (refocusOnClose) {
            // refocus if a trigger element is known
            if (triggerRef.current)
                focusTrigger(triggerRef.current);
        }
    }, [open, triggerEl, refocusOnClose]);
    const handleKey = useEvent((e) => {
        const containerEl = containerRef.current;
        const hasNestedModal = modalStack.hasNested(containerEl);
        function close(reason) {
            handleClose(reason);
            if (triggerRef.current)
                focusTrigger(triggerRef.current);
        }
        function refocus(el = containerEl) {
            focusTrigger(el);
            e.preventDefault();
        }
        if (hasNestedModal)
            return;
        switch (e.key) {
            // auto closing au Escape key
            case 'Escape': {
                close('escape');
                break;
            }
            // Trapping focus
            case 'Tab': {
                if (closeOnTab) {
                    close('tab');
                    e.preventDefault();
                    e.stopPropagation();
                    break;
                }
                if (disableFocusTrap)
                    return;
                const activeElement = document.activeElement;
                const outside = isOutside(containerEl, activeElement);
                const firstElement = getFirstFocusableDescendant(containerEl);
                const lastElement = getLastFocusableDescendant(containerEl);
                if (e.shiftKey) {
                    if (activeElement === containerEl) {
                        if (lastElement) {
                            refocus(lastElement);
                        }
                        else {
                            refocus();
                        }
                        break;
                    }
                    if (outside || activeElement === firstElement) {
                        refocus(lastElement);
                    }
                }
                else {
                    // case of the container focused without any
                    // focusable child element
                    if (activeElement === containerEl && !firstElement) {
                        refocus();
                    }
                    else if (outside || activeElement === lastElement) {
                        refocus(firstElement);
                    }
                }
                break;
            }
            default:
                break;
        }
    });
    // closing when clicking outside of the container
    const handleClick = useEvent((e) => {
        const containerEl = containerRef.current;
        const el = e.target;
        const outsideSelf = isOutside(containerEl, el) && (triggerEl ? isOutside(triggerEl, el) : true);
        if (outsideSelf && !modalStack.contains(containerEl, el)) {
            handleClose('clickoutside');
        }
    });
    return useRefEffect((containerEl) => {
        containerRef.current = containerEl;
        if (open) {
            window.addEventListener('keydown', handleKey, true);
            window.addEventListener('mousedown', handleClick, true);
            if (!triggerRef.current)
                triggerRef.current = document.activeElement;
            // focus the container after opening
            if (autoFocus) {
                const selected = containerEl.querySelector('[aria-current="true"], [aria-selected="true"], [aria-checked="true"]');
                if (selected) {
                    attemptFocus(selected, true, {
                        preventScroll: true,
                    });
                }
                else {
                    focusFirstDescendant(containerEl, true, {
                        preventScroll: true,
                    });
                }
            }
        }
        return () => {
            window.removeEventListener('mousedown', handleClick, true);
            window.removeEventListener('keydown', handleKey, true);
        };
    }, [autoFocus, handleClick, handleKey, open]);
}
export default usePopoverContainer;
