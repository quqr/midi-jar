export type ItemToFocus = {
    item?: Element;
    index?: number;
};
export type ListNavOptions = {
    /**
     * A needed query selector to get all the navigable list items
     */
    itemQuerySelector: string;
    /**
     * The navigation direction
     */
    direction?: 'vertical' | 'horizontal';
    /**
     * Custom on focus item callback. Return a boolean
     */
    onFocus?: (itemToFocus: ItemToFocus, triggerEl: HTMLElement) => void;
    /**
     * The element to consider as the list container
     * If no element provided, the hook will use the trigger element
     * as the container one.
     */
    containerEl?: HTMLElement | null;
    /**
     * Optionnal callback to trigger when entering
     */
    onEnter?: (focusedIndex: number, triggerEl: HTMLElement) => void;
    /**
     * Disable the nav by char search behaviour
     */
    disableSearchNav?: boolean;
};
/**
 * Hook that manage the keyboard navigation inside a list
 */
export declare function useListNav(options: ListNavOptions): import("../useRefEffect").RefEffetCallbackRef<HTMLElement>;
export default useListNav;
