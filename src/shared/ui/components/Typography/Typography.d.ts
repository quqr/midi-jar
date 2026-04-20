import React from 'react';
export declare const TypographyWeights: readonly ["light", "regular", "bold"];
export declare const TypographySizes: readonly ["lg", "md", "sm"];
export type TypographyWeight = (typeof TypographyWeights)[number];
export type TypographySize = (typeof TypographySizes)[number];
export type TypographyAlign = 'center' | 'start' | 'end';
export type TypographyIntent = 'default' | 'subtle' | 'contrast' | 'placeholder' | 'inherit' | 'error';
export type TypographyProps = {
    size?: TypographySize;
    /**
     * The text alignment
     */
    align?: TypographyAlign;
    /**
     * The text weight
     */
    weight?: TypographyWeight;
    /**
     * The text intent color
     */
    intent?: TypographyIntent;
    /**
     * The content to style
     */
    children?: React.ReactNode;
};
/**
 * Wraps any content, with typographic styling.
 */
export declare const Typography: import("../../utils/forwardRef").FunctionComponentWithAs<"div", TypographyProps>;
export default Typography;
