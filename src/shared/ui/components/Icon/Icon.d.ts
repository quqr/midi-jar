import React from 'react';
type IconStatics = {
    IconComponent: React.ElementType;
};
export declare const IconSizes: readonly ["auto", "lg", "md", "sm"];
export declare const IconIntents: readonly ["default", "subtle", "contrast", "neutral", "primary", "secondary", "danger", "warning", "success", "inherit"];
export type IconSize = (typeof IconSizes)[number];
export type IconIntent = (typeof IconIntents)[number];
export interface IconProps {
    /**
     * The Icon name
     */
    name: string;
    /**
     * The Icon semantic intent
     */
    intent?: IconIntent;
    /**
     * The Icon size (in teeshirt size)
     */
    size?: IconSize;
    /**
     * Make the icon spin (clockwise)
     */
    spin?: boolean;
}
/**
 * Renders an icon with icon classes and standardized styling
 */
export declare const Icon: import("../../utils/forwardRef").FunctionComponentWithAs<"i", IconProps> & IconStatics;
export default Icon;
