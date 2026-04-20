type El = HTMLElement | HTMLButtonElement | HTMLAnchorElement | HTMLInputElement;
type FocusOptions = {
    preventScroll?: boolean;
};
/**
 * Test if an DOM element is focusable
 *
 * @param element The element to test
 * @param allowNegativeTabIndex Indicate if elements with tabIndex "-1" must be considered focusable
 */
export declare function isFocusable<T extends El>(element: T, allowNegativeTabIndex?: boolean): boolean;
/**
 * Try to focus a given DOM elements
 * @param element Element to focus
 * @param allowNegativeTabIndex Indicate if elements with tabIndex "-1" must be considered focusable
 * @returns true if focus went well, false if the element was not focusable or if an error occured
 */
export declare function attemptFocus<T extends El>(element?: T | null, allowNegativeTabIndex?: boolean, options?: FocusOptions): boolean;
/**
 * Focus the first focusable descendant of a given DOM element
 * @param element The parent element
 * @param includeNegativeTabIndex Indicate if elements with tabIndex "-1" must be considered focusable
 * @return true if the focus went well, false if no focusable element was found
 */
export declare function focusFirstDescendant<T extends El>(element: T, includeNegativeTabIndex?: boolean, options?: FocusOptions): boolean;
/**
 * Focus the last focusable descendant of a given DOM element
 * @param element The parent element
 * @param includeNegativeTabIndex Indicate if elements with tabIndex "-1" must be considered focusable
 * @return true if the focus went well, false if no focusable element was found
 */
export declare function focusLastDescendant<T extends El>(element: T, includeNegativeTabIndex?: boolean, options?: FocusOptions): boolean;
/**
 * Return the first focusable descendant of the given element
 */
export declare function getFirstFocusableDescendant(element?: HTMLElement | null, allowNegativeTabIndex?: boolean): HTMLElement | undefined;
/**
 * Return the last focusable descendant of the given element
 */
export declare function getLastFocusableDescendant(element?: HTMLElement | null, allowNegativeTabIndex?: boolean): HTMLElement | undefined;
/**
 * Return the next focusable sibling element
 */
export declare function getNextFocusable(element?: HTMLElement | null, allowNegativeTabIndex?: boolean): Element | undefined;
/**
 * Return the previous focusable sibling
 */
export declare function getPreviousFocusable(element?: HTMLElement | null, allowNegativeTabIndex?: boolean): Element | undefined;
/**
 * Test is the given element is outside the given container
 */
export declare function isOutside(container: HTMLElement | null, element: HTMLElement | null): boolean | undefined;
type FocusByTextParam = {
    rootEl: HTMLElement;
    startEl?: HTMLElement;
    text: string;
};
/**
 * Function that will find and focus the next element of the given
 * container containing the given text as innterText, starting with
 * the given start element
 * @return has something been focused
 */
export declare function focusByText({ rootEl, startEl, text }: FocusByTextParam): boolean;
export {};
