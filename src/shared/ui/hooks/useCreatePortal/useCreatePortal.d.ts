import React from 'react';
type Container = Element | DocumentFragment | null;
type CreatePortal = (children: React.ReactNode, container?: Container, key?: null | string) => React.ReactPortal;
/**
 * Hook that returns a SSR safe createPortal function
 */
export declare function useCreatePortal(disable?: boolean): CreatePortal;
export default useCreatePortal;
