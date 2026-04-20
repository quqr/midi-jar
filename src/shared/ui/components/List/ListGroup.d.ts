import React from 'react';
export type ListGroupProps = React.ComponentPropsWithoutRef<'li'> & {
    /**
     * Optional header for the section
     */
    header?: React.ReactNode;
    /**
     * Sublist as prop
     */
    listAs?: React.ElementType;
};
/**
 * Renders a list group as a sublist with role group and optional header
 *
 * To be used inside a `<Menu>` or `<SubMenu>` component.
 */
export declare const ListGroup: import("../../utils/forwardRef").FunctionComponentWithAs<"li", ListGroupProps>;
export default ListGroup;
