export type ModalContainerContextValue = {
    container: HTMLDivElement | null;
};
export declare const ModalContainerContext: import("react").Context<ModalContainerContextValue>;
export declare function useModalContainer(): HTMLDivElement | null;
