export type ModalActionsDirection = 'auto' | 'vertical' | 'horizontal';
export type ModalActionsProps = {
    /**
     * The Direction of the action buttons
     */
    direction?: ModalActionsDirection;
};
/**
 * Wraps the footer of a modal.
 *
 * Must be used inside a Modal component.
 */
export declare const ModalActions: import("../../utils/forwardRef").FunctionComponentWithAs<"footer", ModalActionsProps>;
export default ModalActions;
