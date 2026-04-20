/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
import { useCallback, useEffect, useRef } from 'react';
/**
 * A Hook to define an event handler with an always-stable function identity.
 * https://github.com/reactjs/rfcs/blob/useevent/text/0000-useevent.md
 * (Need to be changed with the React implementation once released)
 */
export function useEvent(func) {
    const ref = useRef(func);
    useEffect(() => {
        ref.current = func;
    });
    return useCallback((...args) => {
        return ref.current(...args);
    }, []);
}
export default useEvent;
