import { useCallback, useLayoutEffect, useState } from 'react';
import useResizeObserver from '../useResizeObserver';
/**
 * Hook used to measure the size of an element
 */
export function useMeasure(options) {
    const { disabled, resizeOberserOptions = {} } = options || {};
    const [dimension, setDimension] = useState(null);
    const [element, ref] = useState(null);
    const update = () => {
        const rect = element ? element.getBoundingClientRect() : null;
        setDimension(rect);
    };
    const handleResize = useCallback((entries) => {
        if (entries.length) {
            setDimension(entries[0].contentRect);
        }
    }, []);
    useResizeObserver(element, handleResize, {
        ...resizeOberserOptions,
        disabled,
    });
    useLayoutEffect(update, [element]);
    return {
        ref,
        dimension,
        element,
        update,
    };
}
export default useMeasure;
