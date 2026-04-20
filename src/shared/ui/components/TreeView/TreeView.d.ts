import React from 'react';
export type TreeViewProps = {
    /**
     * Mandatory aria label
     */
    'aria-label': string;
    /**
     * Makes List header sticky to top
     */
    sticky?: boolean;
    /**
     * The tree view content - should contain TreeViewItem elements
     */
    children?: React.ReactNode;
};
/**
 * Provides an TreeView context and wraps a hierarchical list of collapsible items, with multiple depth.
 */
export declare const TreeView: import("../../utils/forwardRef").FunctionComponentWithAs<"nav", TreeViewProps>;
export default TreeView;
