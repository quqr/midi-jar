import React from 'react';
import { MergeProps } from '../../utils/typeUtils';
import { AnimationDurationOptions } from '../../hooks/useAnimationDuration';
import { OnModalClose } from './ModalContext';
export declare const ModalSizes: readonly ["sm", "md", "lg", "xl", "fullscreen"];
export type ModalSize = (typeof ModalSizes)[number];
export type ModalProps = MergeProps<{
    /**
     * Is the modal opened
     */
    open?: boolean;
    /**
     * The size of the modal (in teeeshirt size, or `fullscreen`)
     */
    size?: ModalSize;
    /**
     * Makes the backdrop fully transparent
     */
    noOverlay?: boolean;
    /**
     * Props to pass to the dialog element
     */
    dialogProps?: React.ComponentPropsWithRef<'div'>;
    /**
     * Props to pass to the overlay element
     */
    overlayProps?: React.HTMLProps<HTMLDivElement>;
    /**
     * Callback fired when the modal need to close.
     * Take the cause of closing as parameter.
     */
    onClose?: OnModalClose;
    /**
     * The modal content
     */
    children?: React.ReactNode;
    /**
     * Disable the portal behaviour
     */
    disablePortal?: boolean;
    /**
     * Disable the autofocus behaviour, useful when using an autoFocus props on a particular element
     */
    disableAutoFocus?: boolean;
    /**
     * Props to pass to the `useAnimationDuration` hook
     */
    animationProps?: AnimationDurationOptions;
}>;
/**
 * Wraps any content in a floating Box centered in the application, conditionally mounted & displayed.
 *
 * Should be used contextually to give more information or gather additional info following a user action.
 *
 * Can contain ModalHeader, ModalContent and ModalActions.
 *
 * The open state must be controlled externally.
 */
export declare const Modal: import("../../utils/forwardRef").FunctionComponentWithAs<"div", ModalProps>;
export default Modal;
