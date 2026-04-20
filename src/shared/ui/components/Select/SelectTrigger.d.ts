import React from 'react';
import { MergeProps } from '../../utils/typeUtils';
import { InputProps } from '../Input';
type SelectTriggerStatic = {
    /**
     * Icon when Select is open
     */
    ICON_OPEN: string;
    /**
     * Icon when Select is closed
     */
    ICON_CLOSED: string;
};
export type SelectTriggerProps = MergeProps<{
    onChange?: (event?: React.ChangeEvent<HTMLInputElement>) => void;
    /**
     * The input value
     */
    value?: string;
    /**
     * Is the corresponding Select opened ?
     */
    open?: boolean;
}, InputProps>;
/**
 * Trigger input for the Select component
 */
export declare const SelectTrigger: React.ForwardRefExoticComponent<Omit<SelectTriggerProps, "ref"> & React.RefAttributes<HTMLInputElement>> & SelectTriggerStatic;
export default SelectTrigger;
