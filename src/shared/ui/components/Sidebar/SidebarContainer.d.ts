import React from 'react';
import { PropsWithAs, As } from '../../utils/typeUtils';
import { AnimationDurationOptions } from '../../hooks/useAnimationDuration';
export declare const SidebarSizes: readonly ["xs", "sm", "md", "lg", "xl"];
export declare const SidebarPlacements: readonly ["top", "bottom", "left", "right"];
export type SidebarSize = (typeof SidebarSizes)[number];
export type SidebarPlacement = (typeof SidebarPlacements)[number];
export type SidebarContainerProps = {
    /**
     * Opens the sidebar
     */
    open?: boolean;
    /**
     * The placement of the Sidebar
     */
    placement?: SidebarPlacement;
    /**
     * Callbacks when the Sidebar is closed.
     *
     * NOTE: component must be controlled externally
     */
    onClose?: () => void;
    /**
     * The size of the Sidebar (in teeeshirt size)
     */
    size?: SidebarSize;
    /**
     * Display an inset shadow and background
     */
    inset?: boolean;
    /**
     * The Sidebar content
     */
    sidebar?: React.ReactNode;
    /**
     * The content
     */
    children?: React.ReactNode;
    /**
     * Props to pass to the `useAnimationDuration` hook
     */
    animationProps?: AnimationDurationOptions;
    /**
     * Props to pass to the sidebar container
     */
    sidebarProps?: Partial<PropsWithAs<As, null>>;
    /**
     * Props to pass to the content container
     */
    contentProps?: Partial<PropsWithAs<As, null>>;
};
/**
 * Provides a container for a Sidebar with show/hide control and custom placement & size
 */
export declare const SidebarContainer: import("../../utils/forwardRef").FunctionComponentWithAs<"div", SidebarContainerProps>;
export default SidebarContainer;
