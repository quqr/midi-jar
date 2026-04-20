import { createContext, useContext } from 'react';
export const ModalContext = createContext({});
export function useModal(props = {}) {
    const ctx = useContext(ModalContext);
    return {
        ...ctx,
        onClose: props?.onClose ?? ctx?.onClose,
    };
}
