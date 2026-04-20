import React from 'react';
export type CollapseProps = {
    /**
     * Opens the collapse content
     */
    open?: boolean;
    /**
     * The minimum height (in px) when content is collapsed
     */
    collapsedHeight?: number;
    /**
     * Keeps the children mouned when collapsed
     */
    keepMounted?: boolean;
    /**
     * Props to pass to the wrapper element containing the collapse content
     */
    wrapperProps?: React.ComponentPropsWithRef<'div'>;
    /**
     * The collapse content
     */
    children?: React.ReactNode;
};
/**
 * Wraps any content to be conditionally displayed, with an expanding animation.
 *
 * The open state must be controlled externally.
 */
export declare const Collapse: import("../../utils/forwardRef").FunctionComponentWithAs<"div", CollapseProps>;
export default Collapse;
