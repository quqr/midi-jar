import { useCallback, useEffect, useRef } from 'react';
import useEvent from '../useEvent';
/**
 * Hook that allow to manage a callback ref with an effect-like api
 */
export function useRefEffect(func, deps) {
    const cleanup = useRef(null);
    const effect = useEvent(func);
    const callback = useCallback((nodeEl) => {
        callback.nodeEl = nodeEl;
        if (cleanup.current)
            cleanup.current();
        if (nodeEl != null) {
            cleanup.current = effect(nodeEl) || null;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);
    useEffect(() => {
        return () => {
            if (cleanup.current)
                cleanup.current();
        };
    }, []);
    return callback;
}
export default useRefEffect;
