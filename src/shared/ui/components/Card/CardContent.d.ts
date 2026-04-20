import React from 'react';
export type CardContentProps = {
    /**
     * content of the card
     */
    children?: React.ReactNode;
};
/**
 * Wraps the content of a card.
 *
 * Must be used inside a Card component.
 */
export declare const CardContent: import("../../utils/forwardRef").FunctionComponentWithAs<"div", CardContentProps>;
export default CardContent;
