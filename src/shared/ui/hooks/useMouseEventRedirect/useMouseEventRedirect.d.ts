import React from 'react';
export type MouseEventRedirectOptions<R extends HTMLElement, T extends HTMLElement> = {
    /**
     * Disable the redirection behaviour
     */
    disabled?: boolean;
    /**
     * FUnction allowing to conditionnaly allow redirection
     * return a boolean telling if we need to redirect or not
     */
    checkRedirect?: (mouseEvent: MouseEvent, rootEl: R, targerEL: T | null) => boolean;
    /**
     * Redict only when clicking on a non-interactive element
     */
    nonInteractiveOnly?: boolean;
};
/**
 * Hook used to redirect mouse event from a container to a trigger element
 */
export declare function useMouseEventRedirect<R extends HTMLElement, T extends HTMLElement>(options?: MouseEventRedirectOptions<R, T>): [React.Ref<R>, React.Ref<T>];
export default useMouseEventRedirect;
