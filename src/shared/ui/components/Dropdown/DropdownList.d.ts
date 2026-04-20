import React from 'react';
import { MergeProps } from '../../utils/typeUtils';
import { List } from '../List';
import { Box } from '../Box';
export type DropdownListProps = MergeProps<React.ComponentProps<typeof List>, React.ComponentProps<typeof Box>>;
export declare const DropdownList: import("../../utils/forwardRef").FunctionComponentWithAs<"div", DropdownListProps>;
export default DropdownList;
