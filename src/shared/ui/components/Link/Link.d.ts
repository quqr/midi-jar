import React from 'react';
export declare const LinkIntents: readonly ["primary", "destructive"];
export type LinkIntent = (typeof LinkIntents)[number];
export type LinkProps = {
    /**
     * The semantic link intent
     */
    intent?: LinkIntent;
    /**
     * If `true`, makes the link underlined
     */
    underlined?: boolean;
    /**
     * Disables the link and its interactions
     */
    disabled?: boolean;
    /**
     * The content of the link
     */
    children?: React.ReactNode;
};
/**
 * Renders a styled Anchor element with additional feature to disable interations
 */
export declare const Link: import("../../utils/forwardRef").FunctionComponentWithAs<"a", LinkProps>;
export default Link;
