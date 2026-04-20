import { useMemo, useRef } from 'react';
import { useFloating, flip, shift, autoUpdate as autoUpdateFunc, size, } from '@floating-ui/react-dom';
import disableROError from '../../utils/disableROError';
disableROError();
export const defaultMiddleware = [flip(), shift()];
/**
 * Hook used to position an element relatively to a
 * given refence element
 */
export function usePopper(popperOptions) {
    const { strategy, placement, matchWidth, autoUpdate = true, limitHeight = false, middleware = defaultMiddleware, } = popperOptions || {};
    const rect = useRef(null);
    const defaultOptions = useMemo(() => {
        const otps = {
            strategy,
            placement,
            middleware: [
                ...middleware,
                {
                    name: 'measureReference',
                    fn(params) {
                        // middleware that copy the reference rect
                        rect.current = params.rects.reference;
                        return params;
                    },
                },
            ],
            whileElementsMounted: autoUpdate ? autoUpdateFunc : undefined,
        };
        if (matchWidth) {
            otps.middleware?.push(size({
                apply({ rects, elements }) {
                    Object.assign(elements.floating.style, {
                        minWidth: `${rects.reference.width}px`,
                        maxWidth: `${rects.reference.width}px`,
                    });
                },
            }));
        }
        if (limitHeight) {
            otps.middleware?.push(size({
                apply({ availableHeight, elements }) {
                    const maxHeight = typeof limitHeight === 'number'
                        ? Math.min(availableHeight - 8, limitHeight)
                        : availableHeight - 8;
                    Object.assign(elements.floating.style, {
                        maxHeight: `${maxHeight}px`,
                    });
                },
            }));
        }
        return otps;
    }, [placement, autoUpdate, strategy, middleware, matchWidth, limitHeight]);
    const floating = useFloating(defaultOptions);
    return {
        ...floating,
        rect: rect.current,
    };
}
export default usePopper;
