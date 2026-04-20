import type { InputSize } from './InputContainer';
export type InputContainerLabelProps = {
    /**
     * The input label size (in teeshirt size)
     * */
    size?: InputSize;
};
/**
 * Renders an inner label in an InputContainer.
 *
 * Should be used in an InputGroup to prepend or append labels.
 */
export declare const InputContainerLabel: import("../../utils/forwardRef").FunctionComponentWithAs<"div", InputContainerLabelProps>;
export default InputContainerLabel;
