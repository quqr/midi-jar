import React from 'react';
export type CardHeaderProps = {
    /**
     * Content on the left of the header
     */
    left?: React.ReactNode;
    /**
     * Content on the right of the header
     */
    right?: React.ReactNode;
};
/**
 * Wraps the header of a card, with left and right contents on the sides.
 *
 * Must be used inside a Card component.
 */
export declare const CardHeader: import("../../utils/forwardRef").FunctionComponentWithAs<"div", CardHeaderProps>;
export default CardHeader;
