import React from 'react';
import { MergeProps } from '../../utils/typeUtils';
import { BoxProps } from '../Box';
export type ToolbarPosition = 'relative' | 'sticky' | 'fixed';
export type ToolbarPlacement = 'top' | 'bottom';
export type ToolbarProps = MergeProps<{
    /**
     * The positioning of the top bar.
     */
    position?: ToolbarPosition;
    /**
     * The placement of the top bar.
     */
    placement?: ToolbarPlacement;
    /**
     * The top bar content
     */
    children?: React.ReactNode;
}, BoxProps>;
/**
 * Renders a bar sticked to the top of the page, with customizable styling.
 */
export declare const Toolbar: import("../../utils/forwardRef").FunctionComponentWithAs<"div", ToolbarProps>;
export default Toolbar;
