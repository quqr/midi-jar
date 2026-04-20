import React from 'react';
export type ListProps = {
    /**
     * Content of the list
     */
    children?: React.ReactNode;
};
/**
 * Wraps an unordered list of elements.
 *
 * This component integrates only the wrapper style.
 * Use it as a base to implement list based UI patterns, with ListItem as children.
 */
export declare const List: import("../../utils/forwardRef").FunctionComponentWithAs<"ul", ListProps>;
export default List;
