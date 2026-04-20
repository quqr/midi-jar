import React from 'react';
export declare const BadgeSizes: readonly ["sm", "md", "lg"];
export declare const BadgeIntents: readonly ["neutral", "primary", "secondary", "error", "warning", "success"];
export type BadgeSize = (typeof BadgeSizes)[number];
export type BadgeIntent = (typeof BadgeIntents)[number];
export interface BadgeProps {
    /**
     * The badge semantic intent
     */
    intent?: BadgeIntent;
    /**
     * The badge size (in teeshirt size)
     */
    size?: BadgeSize;
    /**
     * Content on the left side of the badge
     */
    left?: React.ReactNode;
    /**
     * Content on the right side of the badge
     */
    right?: React.ReactNode;
    /**
     * The content of the badge
     */
    children?: React.ReactNode;
}
/**
 * Renders a pill with a text, and any elements on the sides of it (e.g. icons).
 */
export declare const Badge: import("../../utils/forwardRef").FunctionComponentWithAs<"div", BadgeProps>;
export default Badge;
