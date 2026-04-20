export declare const BoxElevations: readonly [0, 1, 2, 3];
export declare const BoxPads: readonly ["xs", "sm", "md", "lg", "xl"];
export type BoxElevation = (typeof BoxElevations)[number];
export type BoxPad = (typeof BoxPads)[number];
export type BoxProps = {
    /**
     * The Box elevation (a depth index starting at 0)
     */
    elevation?: BoxElevation;
    /**
     * The Box padggin (in teeshirt size)
     */
    pad?: BoxPad;
    /**
     * Hides overflowing content of the card
     */
    hideOverflow?: boolean;
    /**
     * Display the Box with a border
     */
    outlined?: boolean;
};
/**
 * Wraps any content in a Box with styling (elevation, outline, overflow, variants...).
 *
 * Used as a basic block for other components with shared style / semantic.
 */
export declare const Box: import("../../utils/forwardRef").FunctionComponentWithAs<"div", BoxProps>;
export default Box;
