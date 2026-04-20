import { ReactSliderProps } from './ReactSlider';
import { MergeProps } from '../../utils/typeUtils';
export declare const SliderDirections: readonly ["horizontal", "vertical"];
export type SliderDirection = (typeof SliderDirections)[number];
export type SliderProps = MergeProps<{
    /**
     * The text for the current value of slider
     */
    valueText?: string;
    /**
     * The direction of the slider.
     *
     * Replaces ReactSlider's `orientation` prop.
     */
    direction?: SliderDirection;
    /**
     * Inverts the direction of the slider.
     *
     * Default horizontal direction is left to right, vertical direction is bottom to top (inverted with ReactSlider)
     */
    invert?: boolean;
    /**
     * ClassName to apply to the value text
     */
    textClassName?: string;
}, Omit<ReactSliderProps<number | number[]>, 'orientation'>>;
/**
 * Renders a Slider bar to get a numerical value from user.
 */
export declare const Slider: import("../../utils/forwardRef").FunctionComponentWithAs<"div", SliderProps>;
export default Slider;
