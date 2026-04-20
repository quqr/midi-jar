import React, { CSSProperties } from 'react';
import { MiddlewareData } from '@floating-ui/core';
import { PopperOptions } from './usePopper';
export type PopperState = {
    ref: React.ForwardedRef<HTMLDivElement>;
    arrow?: MiddlewareData['arrow'];
    style: CSSProperties;
};
export type PopperProps = {
    /**
     * The anchor element to use as a reference
     * for the popperplacement
     */
    anchorEl?: HTMLElement | null;
    /**
     * The floating content
     */
    children?: React.ReactNode | ((state: PopperState) => React.ReactNode);
} & PopperOptions;
/**
 * Utility component used to position an element relatively to an anchor element using [floating-ui](https://floating-ui.com/).
 */
export declare const Popper: import("../../utils/forwardRef").FunctionComponentWithAs<"div", PopperProps>;
export default Popper;
