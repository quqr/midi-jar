export type CloseReason = 'escape' | 'clickoutside' | 'tab' | 'closebutton';
export type PopoverNavOptions = {
    /**
     * Callback to trigger when in need to close
     */
    onClose?: (reason?: CloseReason) => void;
    /**
     * The open state
     */
    open?: boolean;
    /**
     * The element that trigger the opening
     * (used to manage the refocus)
     */
    triggerEl?: HTMLElement | null;
    /**
     * Disable the focus traping behaviour
     */
    disableFocusTrap?: boolean;
    /**
     * Close the popover when pressing tab
     */
    closeOnTab?: boolean;
    /**
     * Always refocus on popover close
     * (this will trigger the refocus no matter the source of closing)
     */
    refocusOnClose?: boolean;
    /**
     * Auto focus the first focusable selected element on opening
     * (default to true)
     */
    autoFocus?: boolean;
};
/**
 * Hook used to manage the accessibility of a
 * popover type of component
 */
export declare function usePopoverContainer(options: PopoverNavOptions): import("../useRefEffect").RefEffetCallbackRef<HTMLElement>;
export default usePopoverContainer;
