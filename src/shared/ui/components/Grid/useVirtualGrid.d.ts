import React from 'react';
import { HintSize } from './virtualGridUtils';
export type VirtualGridOptions = {
    /**c
     */
    listLength: number;
    /**
     * The number of items to display on the initial render
     */
    initialNumber?: number;
    /**
     * The number of non visible rows to render
     */
    offscreenRows?: number;
    /**
     * Function allowing to define the number of columns taken
     * by each item in our grid
     */
    hintSize?: HintSize;
    /**
     * The scrolled container element (default to document)
     * Can be an element or a query string to get the element
     */
    scrollContainer?: string | HTMLElement | null;
};
/**
 * A function for rendering an item by its `index`, passed in an `options` object as first argument.
 */
export type VirtualGridRenderItem = (options: {
    index: number;
    first: boolean;
    last: boolean;
    sizes: Sizes;
}) => React.ReactNode;
type Sizes = {
    containerWidth: number;
    containerHeight?: number;
    elementHeight: number;
    elementWidth: number;
    colPerRow: number;
    gap: number;
};
export declare function useVirtualGrid(options: VirtualGridOptions): {
    setContainerEl: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
    renderChildren: (r: VirtualGridRenderItem) => React.ReactNode[];
    containerStyle: React.CSSProperties;
    startIndex: number;
    endIndex: number;
    computeRows: (forceUpdate?: boolean) => void;
    computeAll: () => null | undefined;
};
export default useVirtualGrid;
