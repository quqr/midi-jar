import React from 'react';
type AvatarStatics = {
    /**
     * Icon when Avatar is not loaded
     */
    ICON_USER: string;
    /**
     * Duration threshold in ms to disable transition if loading is fast
     */
    TRANSITION_THRESHOLD: number;
};
export declare const AvatarSizes: readonly ["xs", "sm", "md", "lg", "xl"];
export declare const AvatarShapes: readonly ["round", "square"];
export type AvatarSize = (typeof AvatarSizes)[number];
export type AvatarShape = (typeof AvatarShapes)[number];
type AvatarBaseProps = {
    /**
     * The avatar size (in teeshirt size)
     * */
    size?: AvatarSize;
    /**
     * The avatar shape
     */
    shape?: AvatarShape;
    /**
     * Displays an outline around avatar - defaults to `false`
     */
    outlined?: boolean;
    /**
     * Displays an outline around avatar to indicate online status - defaults to `false`
     */
    online?: boolean;
    /**
     * The image on load callback
     */
    onLoad?: React.ReactEventHandler<HTMLImageElement>;
    /**
     * The image on load callback
     */
    onError?: React.ReactEventHandler<HTMLImageElement>;
    /**
     * The label / initials of avatar (displayed when no image / not loaded)
     */
    children?: React.ReactNode;
};
type AvatarWithoutImageProps = {
    image?: undefined;
    alt?: undefined;
} & AvatarBaseProps;
type AvatarWithImageProps = {
    /**
     * The image url of avatar image
     */
    image: string;
    /**
     *  The alt text for avatar image
     */
    alt: string;
} & AvatarBaseProps;
export type AvatarProps = AvatarWithoutImageProps | AvatarWithImageProps;
/**
 * Renders an User avatar, round or square, with an image or a text (user initials).
 */
export declare const Avatar: import("../../utils/forwardRef").FunctionComponentWithAs<"div", AvatarProps> & AvatarStatics;
export default Avatar;
