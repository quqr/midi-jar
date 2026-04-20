import { Placement, Strategy } from '@floating-ui/react-dom';
import { Middleware } from '@floating-ui/core';
export declare const defaultMiddleware: {
    name: string;
    options?: any;
    fn: (state: import("@floating-ui/dom").MiddlewareState) => import("@floating-ui/core").MiddlewareReturn | Promise<import("@floating-ui/core").MiddlewareReturn>;
}[];
export type PopperOptions = {
    /**
     * The popper placement
     */
    placement?: Placement;
    /**
     * Automatically update the placement when
     * reference change size/position/scroll
     * (note that auto update as some performance overhead)
     */
    autoUpdate?: boolean;
    /**
     * The floating-ui popper placement strategy
     */
    strategy?: Strategy;
    /**
     * The floating-ui middleware to use, override the defaults ones
     */
    middleware?: Middleware[];
    /**
     * Match the width of the popper with the one of the
     * reference element
     */
    matchWidth?: boolean;
    /**
     * Set a max height to the popper container equal to the available space
     * When passing a number, use this value as a minimal height limit
     */
    limitHeight?: boolean | number;
};
/**
 * Hook used to position an element relatively to a
 * given refence element
 */
export declare function usePopper(popperOptions?: PopperOptions): {
    rect: {
        x: number;
        y: number;
        height: number;
        width: number;
    } | null;
    placement: Placement;
    strategy: Strategy;
    middlewareData: import("@floating-ui/core").MiddlewareData;
    x: number;
    y: number;
    isPositioned: boolean;
    update: () => void;
    floatingStyles: React.CSSProperties;
    refs: {
        reference: import("react").MutableRefObject<import("@floating-ui/react-dom").ReferenceType | null>;
        floating: React.MutableRefObject<HTMLElement | null>;
        setReference: (node: import("@floating-ui/react-dom").ReferenceType | null) => void;
        setFloating: (node: HTMLElement | null) => void;
    };
    elements: {
        reference: import("@floating-ui/react-dom").ReferenceType | null;
        floating: HTMLElement | null;
    };
};
export default usePopper;
