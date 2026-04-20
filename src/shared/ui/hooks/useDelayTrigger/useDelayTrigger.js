import { useCallback, useEffect, useRef, useState } from 'react';
/**
 * Hook that delay the trigger of a boolean flag after a given time
 * @param time the timer time value
 * @param init the initial boolean value
 */
export function useDelayTrigger(time = 200, init = false) {
    const [flag, setFlag] = useState(init);
    const timeout = useRef(null);
    const handleTrigger = useCallback((flagValue, immediate = false) => {
        if (timeout.current) {
            clearTimeout(timeout.current);
        }
        if (!immediate) {
            timeout.current = setTimeout(() => {
                setFlag(flagValue);
            }, time);
        }
        else {
            setFlag(flagValue);
        }
    }, [time, setFlag]);
    useEffect(() => {
        return () => {
            if (timeout.current) {
                clearTimeout(timeout.current);
            }
        };
    }, []);
    return [flag, handleTrigger];
}
export default useDelayTrigger;
