import React from 'react';
type SelectOptionStatics = {
    /**
     * Icon when option is selected
     */
    ICON_SELECTED: string;
};
export type SelectOptionProps = {
    /**
     * Specifies that the option is selected
     */
    selected?: boolean;
    /**
     * The option associated value
     */
    value?: string | null;
    /**
     * Specifies that the option is focused
     */
    focused?: boolean;
    /**
     * Callback fired when the option is selected
     */
    onSelect?: (value: string | null) => void;
};
/**
 * Renders an option for a list of selectable options.
 *
 * To be used inside a Select component, by the `children` rendre function
 */
export declare const SelectOption: import("../../utils/forwardRef").FunctionComponentWithAs<import("../../utils/forwardRef").FunctionComponentWithAs<"li", import("../List").ListItemProps>, SelectOptionProps> & SelectOptionStatics;
declare const _default: React.MemoExoticComponent<import("../../utils/forwardRef").FunctionComponentWithAs<import("../../utils/forwardRef").FunctionComponentWithAs<"li", import("../List").ListItemProps>, SelectOptionProps> & SelectOptionStatics>;
export default _default;
