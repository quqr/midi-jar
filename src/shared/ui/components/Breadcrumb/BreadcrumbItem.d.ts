export type BreadcrumbItemProps = {
    /**
     * Set the element as the current item (current page)
     */
    current?: boolean;
};
/**
 * Renders a single item (a link by default) in a Breadcrumb component
 */
export declare const BreadcrumbItem: import("../../utils/forwardRef").FunctionComponentWithAs<"a", BreadcrumbItemProps>;
export default BreadcrumbItem;
