import React from 'react';
export declare const BreadcrumbSeparators: readonly ["none", "chevron", "slash", "backslash"];
export type BreadcrumbSeparator = (typeof BreadcrumbSeparators)[number];
export type BreadcrumbProps = {
    /**
     * The aria label for the breadcrumb
     */
    label?: string;
    /**
     * The style of separator to use
     */
    separator?: BreadcrumbSeparator;
    /**
     * The breadcrumb items - should be BreadcrumbItem elements
     */
    children?: React.ReactNode;
};
/**
 * Renders a list of links that reflects the current page hierarchy, and provides navigation to parent elements.
 */
export declare const Breadcrumb: import("../../utils/forwardRef").FunctionComponentWithAs<"nav", BreadcrumbProps>;
export default Breadcrumb;
