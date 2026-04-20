import React from 'react';
export type RenderWhenVisibleProps = {
    /**
     * The fallback element to render when out of the viewport
     */
    placeholder: React.ReactNode | ((rect: DOMRect | null) => React.ReactNode);
    /**
     * The content to render when in viewport
     */
    children?: React.ReactNode;
};
/**
 * Renders the children when entering the viewport
 *
 * You can use this component as a child of a `SharedObserver` component for better performance when managing lots of observers.
 */
export declare const RenderWhenVisible: React.FC<RenderWhenVisibleProps>;
export default RenderWhenVisible;
