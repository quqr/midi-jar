import React from 'react';
import { OnModalClose } from './ModalContext';
type ModalHeaderStatics = {
    /**
     * Icon for the close button
     */
    ICON_CLOSE: string;
};
export type ModalTitleProps = React.ComponentPropsWithRef<'div'>;
export type ModalHeaderProps = {
    /**
     * The modal title
     */
    title?: string;
    /**
     * Props to pass to the title element
     */
    titleProps?: ModalTitleProps;
    /**
     * Callbacks fired after triggering the close button
     */
    onClose?: OnModalClose;
    /**
     * The modal header content
     */
    children?: React.ReactNode;
};
/**
 * Renders the header of a modal.
 *
 * Must be used inside a Modal, through its `renderHeader` prop.
 */
export declare const ModalHeader: import("../../utils/forwardRef").FunctionComponentWithAs<"header", ModalHeaderProps> & ModalHeaderStatics;
export default ModalHeader;
