import { CloseReason } from '../../hooks/usePopover';
export type OnModalClose = (reason?: CloseReason) => void;
export type ModalContextValue = {
    onClose?: OnModalClose;
    dialogEl?: HTMLDivElement | null;
};
export declare const ModalContext: import("react").Context<ModalContextValue>;
export declare function useModal(props?: ModalContextValue): ModalContextValue;
