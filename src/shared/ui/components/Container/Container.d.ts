import React from 'react';
export declare const ContainerSizes: readonly ["sm", "md", "lg", "xl"];
export declare const ContainerAlignments: string[];
export type ContainerSize = (typeof ContainerSizes)[number];
export type ContainerAlign = (typeof ContainerAlignments)[number];
export type ContainerProps = {
    /**
     * The maximum width of the container
     */
    size?: ContainerSize;
    /**
     * The container content
     */
    children?: React.ReactNode;
    /**
     * The alignment of the container
     */
    align?: ContainerAlign;
};
/**
 * Wraps any element to keep it contained within a limited width.
 *
 * It ensures that the content keeps a predictable width even on wide screens.
 */
export declare const Container: import("../../utils/forwardRef").FunctionComponentWithAs<"div", ContainerProps>;
export default Container;
