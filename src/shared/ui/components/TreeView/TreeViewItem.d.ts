import React from 'react';
import { MergeProps } from '../../utils/typeUtils';
import { ListItemProps } from '../List';
type TreeViewStatic = {
    ICON_OPEN: string;
    ICON_CLOSED: string;
};
export type TreeViewItemProps = MergeProps<{
    /**
     * The item title
     */
    title?: string;
    /**
     * Specifies that the sub group is opened by default when uncontrolled
     */
    defaultOpen?: boolean;
    /**
     * Specifies that the sub group is opened when controlled externally
     */
    open?: boolean;
    /**
     * Specifies that the item disabled
     */
    disabled?: boolean;
    /**
     * Specifies that the item targets the current page (for navigation purpose)
     */
    current?: boolean;
    /**
     * Content on the left of item
     */
    left?: React.ReactNode;
    /**
     * The item content
     */
    children?: React.ReactNode;
    /**
     * Callback when item is opened when controlled externally
     */
    onClick?: (e: React.MouseEvent<HTMLAnchorElement> | React.KeyboardEvent<HTMLLIElement>) => void;
    /**
     * Callback when item is opened when controlled externally
     */
    onOpen?: (e: React.MouseEvent<HTMLAnchorElement> | React.KeyboardEvent<HTMLLIElement>) => void;
    /**
     * Callback when item is closed when controlled externally
     */
    onClose?: (e: React.MouseEvent<HTMLAnchorElement> | React.KeyboardEvent<HTMLLIElement>) => void;
} & ListItemProps>;
/**
 * Renders an item in a tree view, with interactions, and a collapsible subgroup if `children` are provided.
 *
 * Provides a new TreeViewList context for the collapsible subgroup.
 *
 * To be used in a TreeView context.
 */
export declare const TreeViewItem: import("../../utils/forwardRef").FunctionComponentWithAs<"a", TreeViewItemProps> & TreeViewStatic;
export default TreeViewItem;
