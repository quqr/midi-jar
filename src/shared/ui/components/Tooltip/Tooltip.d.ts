import React from 'react';
import { AnimationDurationOptions } from '../../hooks/useAnimationDuration';
import { TooltipPlacement } from './TooltipPopper';
type TooltipStatic = {
    /**
     * Delay (in ms) before showing the tooltip
     */
    TOOLTIP_DELAY: number;
    /**
     * Media query to detect mobile
     */
    IS_MOBILE_QUERY: string;
};
export type TooltipProps = {
    /**
     * The tooltip content
     */
    content?: string;
    /**
     * The tooltip title
     */
    title?: string;
    /**
     * The tooltip placement
     */
    placement?: TooltipPlacement;
    /**
     * The content to decorate with a tooltip
     */
    children?: React.ReactNode;
    /**
     * Disable the portal behaviour of the tooltip content
     */
    disablePortal?: boolean;
    /**
     * Add an `aria-label` or `aria-description` to the trigger element
     * Use `none` if the trigger element already have it
     */
    describeAs?: 'label' | 'description' | 'none';
    /**
     * Props to pass to the `useAnimationDuration` hook
     */
    animationProps?: AnimationDurationOptions;
    /**
     * Forces the tooltip to show
     */
    forceOpen?: boolean;
};
/**
 * Decorates a reference element, to display complementary information
 * as a floating Box when the user interacts (hover, focus...) with it.
 *
 * The tooltip placement is automatically adapted to available space.
 *
 * All other props are passed to the `TooltipPopper` sub component.
 */
export declare const Tooltip: import("../../utils/forwardRef").FunctionComponentWithAs<"div", TooltipProps> & TooltipStatic;
export default Tooltip;
