import React from 'react';
export type ListItemProps = {
    /**
     * Content on the left of the item
     */
    left?: React.ReactNode;
    /**
     * Content on the right of the item
     */
    right?: React.ReactNode;
    /**
     * Specifies that the item is selected
     */
    selected?: boolean;
    /**
     * Disables the item and its interactions
     */
    disabled?: boolean;
    /**
     * Specifies that the item has interactions and associated states
     */
    interactive?: boolean;
    /**
     * Specifies that the item is focused
     */
    focused?: boolean;
    /**
     * Props to pass to the left container element
     */
    leftContainerProps?: React.ComponentProps<'div'>;
    /**
     * Props to pass to the right container element
     */
    rightContainerProps?: React.ComponentProps<'div'>;
    /**
     * Content of the item
     */
    children?: React.ReactNode;
};
/**
 * Renders a list item with optional interactions and states.
 *
 * Can be used in a List component, or in any other list wrapping component (like `<ol>` or `<ul>`).
 */
export declare const ListItem: import("../../utils/forwardRef").FunctionComponentWithAs<"li", ListItemProps>;
export default ListItem;
