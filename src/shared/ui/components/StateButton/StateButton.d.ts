import React from 'react';
type StateButtonStatics = {
    /**
     * Duration (in ms) of feedback (sucess/error) after promise is resolved
     */
    FEEDBACK_DURATION: number;
    /**
     * Icon for the pending state (automatic spin)
     */
    ICON_PENDING: string;
    /**
     * Icon for the success state (automatic spin)
     */
    ICON_SUCCESS: string;
    /**
     * Icon for the error state (automatic spin)
     */
    ICON_ERROR: string;
};
export type StateButtonProps = {
    /**
     * Callback fired on button click
     *
     * If the handler returns a Promise, the button will automatically handle its state.
     */
    onClick?: (e: React.MouseEvent<HTMLElement>) => void | Promise<unknown>;
    /**
     * A promise to give the button a state
     */
    promise?: Promise<unknown>;
    /**
     * Specifies that the button is in pending state
     */
    loading?: boolean;
    /**
     * Disables the button and its interactions
     */
    disabled?: boolean;
    /**
     * Content on the left of the button
     */
    left?: React.ReactNode;
    /**
     * Content on the right of the button
     */
    right?: React.ReactNode;
    /**
     * Content of the button
     */
    children: React.ReactNode;
    /**
     * Icon classname when status is pending
     */
    iconPending?: string;
    /**
     * Icon classname when status is success
     */
    iconSuccess?: string;
    /**
     * Icon classname when status is error
     */
    iconError?: string;
};
/**
 * Renders a button with a loading, success or error state depending on a Promise.
 *
 * You can pass a `promise` as props, or return a Promise in the `onClick` handler.
 * You can also control the pending state directly with `loading`
 */
export declare const StateButton: import("../../utils/forwardRef").FunctionComponentWithAs<import("../../utils/forwardRef").FunctionComponentWithAs<"button", import("../Button").ButtonProps>, StateButtonProps> & StateButtonStatics;
export default StateButton;
