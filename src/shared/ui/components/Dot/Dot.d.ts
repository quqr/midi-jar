export declare const DotSizes: readonly ["sm", "md", "lg"];
export declare const DotIntents: readonly ["neutral", "primary", "secondary", "error", "warning", "success"];
export type DotSize = (typeof DotSizes)[number];
export type DotIntent = (typeof DotIntents)[number];
export type DotProps = {
    /**
     * The Dot semantic intent
     */
    intent?: DotIntent;
    /**
     * The Dot size (in teeshirt size)
     * */
    size?: DotSize;
    /**
     * Displays an animated outline around dot - defaults to `false`
     */
    active?: boolean;
};
/**
 * Renders an Dot with an active state to highlight updates or status
 */
export declare const Dot: import("../../utils/forwardRef").FunctionComponentWithAs<"span", DotProps>;
export default Dot;
