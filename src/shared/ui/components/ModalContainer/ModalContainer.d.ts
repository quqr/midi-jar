import React from 'react';
export type ModalContainerProps = {
    /**
     * The modal header content
     */
    children?: React.ReactNode;
};
/**
 * Provides a state context to define the container of modals (or similar components like Drawers);
 */
export declare const ModalContainer: React.FC<ModalContainerProps>;
export default ModalContainer;
