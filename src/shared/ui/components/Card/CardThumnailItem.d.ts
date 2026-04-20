export type CardThumbnailItemPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center';
export type CardThumbnailItemProps = {
    /**
     * The position of the thumbnail item container
     */
    position: CardThumbnailItemPosition;
};
/**
 * Wraps content in a CardThumbnail with specific anchor placements relative to the thumbnail.
 *
 * Must be used inside a CardThumbnail.
 */
export declare const CardThumbnailItem: import("../../utils/forwardRef").FunctionComponentWithAs<"div", CardThumbnailItemProps>;
export default CardThumbnailItem;
