import React, { RefCallback } from 'react';
export type Ref<R> = React.RefCallback<R> | React.MutableRefObject<R> | undefined | null;
/**
 * Set the given ref regardless of its type
 */
export declare function setRef<T>(ref?: Ref<T>, el?: T | null): void;
/**
 * Merge multiple ref into a single callback
 */
export declare function mergeRef<T>(ref1: Ref<T>, ref2: Ref<T>, ref3?: Ref<T>): RefCallback<T>;
/**
 * Hook that return a merged callback ref with the
 * refs passed in argument
 */
export declare function useMergeRef<T>(ref1: Ref<T>, ref2: Ref<T>, ref3?: Ref<T>): RefCallback<T>;
/**
 * Make a fork of the given ref
 */
export declare function useForkCallbackRef<R>(ref: Ref<R>, otherRef?: Ref<R>): [R | null, RefCallback<R>];
/**
 * Make a fork of the given ref
 */
export declare function useForkRef<R>(ref: Ref<R>, otherRef?: Ref<R>): [React.RefObject<R | null>, RefCallback<R>];
/**
 * Return the current ref on the given React node
 */
export declare function getChildRef<T>(child: React.ReactNode | unknown): Ref<T>;
