export type ModalStackItem = {
    rootEl: HTMLElement;
    hideOnStack?: boolean;
};
/**
 * Manage a set of stacking modal
 */
declare function modalStackManager(): {
    hasNested: (containerEl?: HTMLElement | null) => boolean | 0;
    contains: (modalContainer?: HTMLElement | null, el?: HTMLElement | null) => boolean;
    getStack: () => ModalStackItem[];
    clear: () => void;
    modal: (containerEl?: HTMLElement | null) => {
        hasNested: () => boolean | 0;
        nestedContains: (el?: HTMLElement | null) => boolean;
    };
    add: ({ rootEl, hideOnStack }: ModalStackItem) => () => void;
};
export default modalStackManager;
