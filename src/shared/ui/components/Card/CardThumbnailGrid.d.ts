import React from 'react';
export type CardThumbnailGridProps = {
    /**
     * content of the card thumbnail grid
     */
    children?: React.ReactNode;
};
/**
 * Wraps multiple thumbnails of a Card in an organized grid.
 *
 * It can have 3 children (1 main thumbnail, and 2 other smaller thumbnails).
 *
 * Must be used inside a Card component, and should contain CardThumbnail elements.
 */
export declare const CardThumbnailGrid: import("../../utils/forwardRef").FunctionComponentWithAs<"div", CardThumbnailGridProps>;
export default CardThumbnailGrid;
