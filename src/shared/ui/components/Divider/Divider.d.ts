export declare const DividerAlignments: readonly ["left", "center", "right"];
export type DividerAlign = (typeof DividerAlignments)[number];
export type DividerProps = {
    /**
     * Specifies how the elements should be aligned
     */
    align?: DividerAlign;
};
/**
 * Renders an horizontal line, used as a separator in lists.
 *
 * It can take children in order to display them inside the horizontal line.
 */
export declare const Divider: import("../../utils/forwardRef").FunctionComponentWithAs<"hr", DividerProps>;
export default Divider;
