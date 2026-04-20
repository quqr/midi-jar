import React from 'react';
type CardThumbnailStatics = {
    /**
     * Duration threshold in ms to disable transition if loading is fast
     */
    TRANSITION_THRESHOLD: number;
};
export type CardThumbnailProps = {
    /**
     * The image url of the thumbnail
     */
    src?: string;
    /**
     * The alt text of the thumbnail
     */
    alt: string;
    /**
     * Props to pass to the image element
     */
    imgProps?: React.ComponentProps<'img'>;
};
/**
 * Renders a thumbnail in a card, with fallback to a placeholder if the image cannot be loaded.
 *
 * Must be used inside a Card or a CardThumbnailGrid component.
 */
export declare const CardThumbnail: import("../../utils/forwardRef").FunctionComponentWithAs<"div", CardThumbnailProps> & CardThumbnailStatics;
export default CardThumbnail;
