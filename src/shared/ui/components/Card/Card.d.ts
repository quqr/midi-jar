import { MergeProps } from '../../utils/typeUtils';
import { BoxProps } from '../Box';
export type CardProps = MergeProps<{
    /**
     * Is the card interactive
     */
    interactive?: boolean;
    /**
     * Is the card selected
     */
    selected?: boolean;
    /**
     * Remove all the horizontal padding on child components
     */
    disableGutter?: boolean;
}, BoxProps>;
/**
 * Renders a box used to display a group of organized content.
 *
 * This component make use of the `Box` and accept all of its props.
 *
 * Use it with his sub components to compose the needed card layout.
 *
 * > ⚠️ You may need to think about accessibility when composing your card.
 * - Beware to not nest interactive elements.
 * - Beware that if the whole card is a link, all the content will be read by the screenreader as the link description.
 */
export declare const Card: import("../../utils/forwardRef").FunctionComponentWithAs<"div", CardProps>;
export default Card;
