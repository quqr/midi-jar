import { useEffect, useRef } from 'react';
const INTERACTIVE_ELEMENTS_NAME = ['BUTTON', 'SELECT', 'INPUT', 'LABEL', 'OPTION', 'TEXTAREA', 'A'];
/**
 * Test if the given html element is an interactive one (an element we may click on)
 * or is contained in an interactive one
 * @param el an HTMLElement
 * @returns is the element interactive
 */
function isInteractive(rootElement, el) {
    if (el && rootElement !== el) {
        return INTERACTIVE_ELEMENTS_NAME.includes(el.nodeName) || isInteractive(el, el.parentElement);
    }
    return false;
}
/**
 * Function that will attempt to fire a click to the given Element
 */
function redirectEvent(el, e) {
    if (el && !el.getAttribute('disabled') && !el.getAttribute('aria-disabled')) {
        try {
            el.dispatchEvent(new MouseEvent(e.type, e));
        }
        catch (error) {
            // nothing
        }
    }
}
const NOP = () => true;
/**
 * Hook used to redirect mouse event from a container to a trigger element
 */
export function useMouseEventRedirect(options) {
    const { checkRedirect = NOP, disabled, nonInteractiveOnly } = options || {};
    const rootRef = useRef(null);
    const triggerRef = useRef(null);
    useEffect(() => {
        const root = rootRef.current;
        const handleClick = (e) => {
            const triggerEl = triggerRef.current;
            if (root) {
                const targetEl = e.target;
                const isClickOnTrigger = triggerEl?.contains(targetEl) || triggerEl === targetEl;
                const interactiveCheck = nonInteractiveOnly ? !isInteractive(root, targetEl) : true;
                // check if the click is already on the trigger
                if (!isClickOnTrigger && interactiveCheck && checkRedirect(e, root, triggerEl)) {
                    e.preventDefault();
                    e.stopPropagation();
                    redirectEvent(triggerEl, e);
                }
            }
        };
        if (root && !disabled) {
            root.addEventListener('click', handleClick);
            root.addEventListener('auxclick', handleClick);
        }
        return () => {
            if (root) {
                root.removeEventListener('click', handleClick);
                root.removeEventListener('auxclick', handleClick);
            }
        };
    }, [disabled, nonInteractiveOnly, checkRedirect]);
    return [rootRef, triggerRef];
}
export default useMouseEventRedirect;
