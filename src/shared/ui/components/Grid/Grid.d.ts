import React from 'react';
export declare const GridSizes: readonly ["sm", "md", "lg"];
export declare const GridGaps: readonly ["xs", "sm", "md", "lg", "xl"];
export type GridGap = (typeof GridGaps)[number];
export type GridSize = (typeof GridSizes)[number];
export type GridProps = {
    /**
     * The space between items, as a space multiplier
     */
    gap?: GridGap;
    /**
     * The minimum width of each column (in teeshirt size).
     */
    size?: GridSize;
    /**
     * The grid items.
     */
    children?: React.ReactNode;
};
/**
 * Wraps elements in a grid.
 */
export declare const Grid: import("../../utils/forwardRef").FunctionComponentWithAs<"div", GridProps>;
export default Grid;
