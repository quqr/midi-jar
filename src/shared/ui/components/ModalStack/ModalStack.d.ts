import React from 'react';
export type ModalStackProps = {
    /**
     * Content to provide a Modal Stack
     */
    children?: React.ReactNode;
    /**
     * Disables the modal stacking management
     */
    disableStacking?: boolean;
    /**
     * Specifies that the content should be aria hidden if another modal is stacked
     */
    hideOnStack?: boolean;
};
/**
 * Registers his child element to the modal stack
 */
export declare const ModalStack: React.FC<ModalStackProps>;
export default ModalStack;
