import React, { useMemo } from 'react';
import { attemptFocus } from '../../utils/focusUtils';
import { useForkRef } from '../../utils/refUtils';
import { forwardRefWithStatic } from '../../utils/forwardRef';
import { useEvent } from '../../hooks/useEvent';
import { useId } from '../../hooks/useId';
import { useListNav } from '../../hooks/useListNav';
import { Dropdown, DropdownList } from '../Dropdown';
import { useFormField } from '../Form';
import { Typography } from '../Typography';
import { SelectContext } from './SelectContext';
import { SelectTrigger } from './SelectTrigger';
import { SelectOption } from './SelectOption';
/**
 * Renders an input to select a value among a list of items displayed on a temporary floating box.
 * This component make use of the `Menu` and as a result accept all of its props.
 */
export const Select = forwardRefWithStatic((props, ref) => {
    const { 
    // Dropdown props
    keepOpened, listProps = {}, navOptions = {}, dropdownProps = {}, noOptionPlaceholder = 'No option', 
    // Input props
    value, options, disabled, children, onChange, className, renderInput, placeholder, 'aria-label': ariaLabel, ...otherInputProps } = props;
    const selectedOption = useMemo(() => options?.find((o) => o.value === value), [options, value]);
    const { label, inputProps } = useFormField();
    const [inputRef, mergedInputRef] = useForkRef(ref);
    const listboxId = useId(listProps?.id);
    const listBoxRef = useListNav({
        itemQuerySelector: '[role="option"]',
        ...navOptions,
    });
    /**
     * The trigger element render function
     */
    const renderTrigger = ({ triggerRef, open, handleClose }) => {
        // props to pass to the Input component
        const selectTriggerProps = {
            ...otherInputProps,
            'aria-label': ariaLabel,
            placeholder: placeholder,
            disabled: disabled,
            className: className,
            ref: mergedInputRef,
            value: value ? selectedOption?.label : undefined,
            open: open,
            containerProps: {
                ref: triggerRef,
                'aria-controls': listboxId,
                ...inputProps,
            },
        };
        return typeof renderInput === 'function' ? (renderInput({
            triggerRef,
            open,
            disabled,
            placeholder,
            onClose: handleClose,
            selectedOption,
            value,
            selectTriggerProps,
        })) : (<SelectTrigger {...selectTriggerProps}/>);
    };
    const handleChange = useEvent((v) => {
        if (onChange)
            onChange(v);
    });
    const contextValue = useMemo(() => ({
        onChange: handleChange,
        value,
        keepOpened,
        refocusTrigger: () => {
            if (inputRef.current) {
                setTimeout(() => {
                    attemptFocus(inputRef.current);
                }, 0);
            }
        },
    }), [handleChange, value, keepOpened, inputRef]);
    return (<SelectContext.Provider value={contextValue}>
        <Dropdown closeOnTab disableFocusTrap matchWidth trigger={renderTrigger} limitHeight={Select.HEIGHT_LIMIT} {...dropdownProps}>
          <DropdownList role="listbox" as="ul" aria-label={ariaLabel || label} ref={listBoxRef} {...listProps} id={listboxId}>
            {React.isValidElement(children) ? (children) : options?.length ? (options?.map((o, index) => typeof children === 'function' ? (children({
            option: o,
            index,
            onChange,
            selected: value === o.value,
        })) : (<SelectOption key={o.value} value={o.value} onSelect={onChange} selected={value === o.value}>
                    {o.label}
                  </SelectOption>))) : (<SelectOption tabIndex={undefined} interactive={false}>
                <Typography intent="placeholder">{noOptionPlaceholder}</Typography>
              </SelectOption>)}
          </DropdownList>
        </Dropdown>
      </SelectContext.Provider>);
});
Select.displayName = 'Select';
Select.HEIGHT_LIMIT = 320;
export default Select;
