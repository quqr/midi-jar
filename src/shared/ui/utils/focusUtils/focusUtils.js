/**
 * Test if an DOM element is focusable
 *
 * @param element The element to test
 * @param allowNegativeTabIndex Indicate if elements with tabIndex "-1" must be considered focusable
 */
export function isFocusable(element, allowNegativeTabIndex = false) {
    if (!element)
        return false;
    if (element.tabIndex > 0 ||
        (element.tabIndex === 0 && element.getAttribute('tabIndex') !== null) ||
        (allowNegativeTabIndex && element.tabIndex === -1 && element.getAttribute('tabIndex') !== null)) {
        return true;
    }
    if (element.disabled) {
        return false;
    }
    switch (element.nodeName) {
        case 'A':
            return (!!element.href && element.rel !== 'ignore');
        case 'INPUT':
            return (element.type !== 'hidden' &&
                element.type !== 'file');
        case 'BUTTON':
        case 'SELECT':
        case 'TEXTAREA':
            return true;
        default:
            return false;
    }
}
/**
 * Try to focus a given DOM elements
 * @param element Element to focus
 * @param allowNegativeTabIndex Indicate if elements with tabIndex "-1" must be considered focusable
 * @returns true if focus went well, false if the element was not focusable or if an error occured
 */
export function attemptFocus(element, allowNegativeTabIndex = false, options) {
    if (!element || !isFocusable(element, allowNegativeTabIndex)) {
        return false;
    }
    try {
        element.focus(options);
    }
    catch (e) {
        return false;
    }
    return document.activeElement === element;
}
/**
 * Focus the first focusable descendant of a given DOM element
 * @param element The parent element
 * @param includeNegativeTabIndex Indicate if elements with tabIndex "-1" must be considered focusable
 * @return true if the focus went well, false if no focusable element was found
 */
export function focusFirstDescendant(element, includeNegativeTabIndex = false, options) {
    if (element && element.childNodes) {
        for (let i = 0; i < element.childNodes.length; i += 1) {
            const child = element.childNodes[i];
            if (attemptFocus(child, includeNegativeTabIndex, options) ||
                focusFirstDescendant(child, includeNegativeTabIndex, options)) {
                return true;
            }
        }
    }
    return false;
}
/**
 * Focus the last focusable descendant of a given DOM element
 * @param element The parent element
 * @param includeNegativeTabIndex Indicate if elements with tabIndex "-1" must be considered focusable
 * @return true if the focus went well, false if no focusable element was found
 */
export function focusLastDescendant(element, includeNegativeTabIndex = false, options) {
    if (element && element.childNodes) {
        for (let i = element.childNodes.length - 1; i >= 0; i -= 1) {
            const child = element.childNodes[i];
            if (attemptFocus(child, includeNegativeTabIndex, options) ||
                focusLastDescendant(child, includeNegativeTabIndex, options)) {
                return true;
            }
        }
    }
    return false;
}
/**
 * Return the first focusable descendant of the given element
 */
export function getFirstFocusableDescendant(element, allowNegativeTabIndex) {
    if (element && element.childNodes) {
        for (let i = 0; i < element.childNodes.length; i += 1) {
            const child = element.childNodes[i];
            if (isFocusable(child, allowNegativeTabIndex)) {
                return child;
            }
            else {
                const nestedFocusable = getFirstFocusableDescendant(child, allowNegativeTabIndex);
                if (nestedFocusable) {
                    return nestedFocusable;
                }
            }
        }
    }
}
/**
 * Return the last focusable descendant of the given element
 */
export function getLastFocusableDescendant(element, allowNegativeTabIndex) {
    if (element && element.childNodes) {
        for (let i = element.childNodes.length - 1; i >= 0; i -= 1) {
            const child = element.childNodes[i];
            if (isFocusable(child, allowNegativeTabIndex)) {
                return child;
            }
            else {
                const nestedFocusable = getLastFocusableDescendant(child, allowNegativeTabIndex);
                if (nestedFocusable) {
                    return nestedFocusable;
                }
            }
        }
    }
}
/**
 * Return the next focusable sibling element
 */
export function getNextFocusable(element, allowNegativeTabIndex) {
    if (!element)
        return;
    const nextSibling = element.nextElementSibling;
    if (!nextSibling)
        return;
    return isFocusable(nextSibling, allowNegativeTabIndex)
        ? nextSibling
        : getNextFocusable(nextSibling, allowNegativeTabIndex);
}
/**
 * Return the previous focusable sibling
 */
export function getPreviousFocusable(element, allowNegativeTabIndex) {
    if (!element)
        return;
    const previousSibling = element.previousSibling;
    if (!previousSibling)
        return;
    return isFocusable(previousSibling, allowNegativeTabIndex)
        ? previousSibling
        : getPreviousFocusable(previousSibling, allowNegativeTabIndex);
}
/**
 * Test is the given element is outside the given container
 */
export function isOutside(container, element) {
    if (!container || !element)
        return undefined;
    return container !== element && !container.contains(element);
}
/**
 * Function that will find and focus the next element of the given
 * container containing the given text as innterText, starting with
 * the given start element
 * @return has something been focused
 */
export function focusByText({ rootEl, startEl = rootEl, text }) {
    if (!startEl || !rootEl || !text)
        return false;
    let loopStartEl = null;
    return (function findFocus(currentEl, lastEl) {
        // we already looped though all of the items or recurcive fucked-up
        if (currentEl === loopStartEl || lastEl === currentEl)
            return false;
        if (!loopStartEl)
            loopStartEl = currentEl;
        const next = currentEl === rootEl
            ? getFirstFocusableDescendant(rootEl, true)
            : getNextFocusable(currentEl, true);
        if (!next) {
            // loop to the first element
            return findFocus(rootEl, currentEl);
        }
        else if (next?.textContent?.toUpperCase()?.startsWith(text?.toUpperCase())) {
            // the text are matching
            return attemptFocus(next, true);
        }
        // trying next element
        return findFocus(next, currentEl);
    })(startEl);
}
