export type ModalStackRegister = {
    hideOnStack?: boolean;
    disableStacking?: boolean;
};
export declare const modalStack: {
    hasNested: (containerEl?: HTMLElement | null) => boolean | 0;
    contains: (modalContainer?: HTMLElement | null, el?: HTMLElement | null) => boolean;
    getStack: () => import("./modalStackManager").ModalStackItem[];
    clear: () => void;
    modal: (containerEl?: HTMLElement | null) => {
        hasNested: () => boolean | 0;
        nestedContains: (el?: HTMLElement | null) => boolean;
    };
    add: ({ rootEl, hideOnStack }: import("./modalStackManager").ModalStackItem) => () => void;
};
export declare function useModalStack({ hideOnStack, disableStacking }: ModalStackRegister): import("../../hooks/useRefEffect").RefEffetCallbackRef<HTMLElement>;
export default useModalStack;
