export type CardThumbnailOverlayProps = {
    /**
     * Add interactive styles to the overlay
     */
    interactive?: boolean;
};
/**
 * Renders an overlay for card thumbnails, to highlight interactions or improve contrast.
 *
 * Must be used inside a CardThumbnail.
 */
export declare const CardThumbnailOverlay: import("../../utils/forwardRef").FunctionComponentWithAs<"div", CardThumbnailOverlayProps>;
export default CardThumbnailOverlay;
