import React from 'react';
import { MergeProps, PropsWithAs } from '../../utils/typeUtils';
import { InputContainerProps } from './InputContainer';
export type InputProps = MergeProps<InputContainerProps & {
    /**
     * Callbacks when the text value changes.
     *
     * First argument is the value as `string`, second argument is the raw event of the input.
     */
    onChange?: (value: string, event?: React.ChangeEvent<HTMLInputElement>) => void;
    /**
     * Props to pass to the root InputContainer
     *
     * NOTE: other props are passed to the input element.
     */
    containerProps?: PropsWithAs<'div', InputContainerProps>;
}, React.ComponentProps<'input'>>;
/**
 * Renders a basic text input with style and additional states.
 *
 * Accept all the props of an input, as well as a `left` and `right` props.
 *
 * > All props passed to it will be passed to the input element.
 * If you wan't to pass props specifically to the container root element, use the `containerProps` prop.
 */
export declare const Input: import("../../utils/forwardRef").FunctionComponentWithAs<"input", InputProps>;
export default Input;
