type UsePopoverOptions = {
    triggerEl?: HTMLElement | null;
    open?: boolean;
    onOpen?: () => void;
    onClose?: () => void;
    triggerKeys?: string[];
};
/**
 * Hook that manage an opening state binded to a trigger element
 */
export declare function usePopoverTrigger({ onOpen, onClose, open: openProp, triggerEl, triggerKeys, }?: UsePopoverOptions): {
    handleToggle: () => void;
    handleOpen: () => void;
    handleClose: () => void;
    open: boolean;
};
export default usePopoverTrigger;
