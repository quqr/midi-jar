import React from 'react';
export type RefEffetCallbackRef<T extends HTMLElement> = ((nodeEl: T | null) => void) & {
    nodeEl?: T | null;
};
export type RefEffect<T extends HTMLElement> = (el: T) => (() => void) | void;
/**
 * Hook that allow to manage a callback ref with an effect-like api
 */
export declare function useRefEffect<T extends HTMLElement>(func: RefEffect<T>, deps: React.DependencyList): RefEffetCallbackRef<T>;
export default useRefEffect;
