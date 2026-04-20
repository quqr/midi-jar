import { useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
/**
 * Hook that returns a SSR safe createPortal function
 */
export function useCreatePortal(disable = false) {
    const [canRender, setCanRender] = useState(false);
    useEffect(() => {
        setCanRender(true);
    }, [setCanRender]);
    return useMemo(() => {
        if (disable) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            return (children) => children;
        }
        return canRender
            ? (children, container, key) => {
                return createPortal(children, container || document.body, key);
            }
            : (() => null);
    }, [canRender, disable]);
}
export default useCreatePortal;
