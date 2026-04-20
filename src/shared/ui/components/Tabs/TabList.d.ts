import React from 'react';
import { MergeProps } from '../../utils/typeUtils';
import { ButtonGroupProps } from '../ButtonGroup';
import { TabsVariant, TabsSize } from './TabListContext';
export type TabListProps = MergeProps<{
    /**
     * The currently selected tab id
     */
    selected?: string;
    /**
     * Callback fired when the selected tab changes
     */
    onChange?: (id: string) => void;
    /**
     * The stylistic variant of the list and nested tabs
     */
    variant?: TabsVariant;
    /**
     * The size of the list and nested tabs
     */
    size?: TabsSize;
    /**
     * Adds a border to the bottom/left depending on direction
     */
    bordered?: boolean;
    /**
     * Mandatory aria label for accesibility
     */
    'aria-label': string;
    /**
     * The items in the list - should be Tab elements
     */
    children?: React.ReactNode;
}, ButtonGroupProps>;
/**
 * Wraps a list of navigation tabs, with accessibility role `tablist`.
 *
 * Provides a context, with a `selected`, `onChange` and stylistic props to manage the selected tab state
 * and rendering of children.
 */
export declare const TabList: import("../../utils/forwardRef").FunctionComponentWithAs<import("../../utils/forwardRef").FunctionComponentWithAs<import("../../utils/forwardRef").FunctionComponentWithAs<"div", import("..").StackProps>, import("..").StackProps>, TabListProps>;
export default TabList;
