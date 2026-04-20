import useRefEffect from '../../hooks/useRefEffect';
import modalStackManager from './modalStackManager';
export const modalStack = modalStackManager();
export function useModalStack({ hideOnStack, disableStacking }) {
    return useRefEffect((rootEl) => {
        let remove;
        if (rootEl && !disableStacking) {
            remove = modalStack.add({
                rootEl,
                hideOnStack,
            });
        }
        return () => {
            if (remove)
                remove();
        };
    }, [hideOnStack, disableStacking]);
}
export default useModalStack;
