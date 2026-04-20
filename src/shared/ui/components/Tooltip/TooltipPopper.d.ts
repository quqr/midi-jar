export type TooltipPlacement = 'top' | 'right' | 'bottom' | 'left';
export type TooltipPopperProps = {
    /**
     * The anchor element taken as a reference to place the floating element
     */
    anchorEl: HTMLElement | null;
    /**
     * The tooltip placement
     */
    placement?: TooltipPlacement;
    /**
     * SHow the content
     */
    show?: boolean;
    /**
     * The tooltip title
     */
    title?: string;
    /**
     * The tooltip content
     */
    content?: string;
};
export declare const TooltipPopper: import("../../utils/forwardRef").FunctionComponentWithAs<"div", TooltipPopperProps>;
export default TooltipPopper;
