import React from 'react';
type Observe = (el: HTMLElement, onIntersect: OnIntersect) => () => void;
export type OnIntersect = (entry: IntersectionObserverEntry) => void;
export declare const IntersectionContext: React.Context<Observe | null>;
type SharedObserverProps = IntersectionObserverInit & {
    children?: React.ReactNode;
};
/**
 * Provides a single intersection observer for multiple children
 */
export declare const SharedObserver: React.FC<SharedObserverProps>;
/**
 * Hook to connect to the shared observer context
 */
export declare function useSharedObserver(): Observe | null;
export default SharedObserver;
