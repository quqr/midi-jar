export type RadioGroupOnChange = (value: string, event?: React.ChangeEvent<HTMLInputElement>) => void;
export type RadioGroupState = {
    disabled?: boolean;
    name?: string;
    currentValue?: string | null;
    onChange?: RadioGroupOnChange;
};
export declare const RadioGroupContext: import("react").Context<RadioGroupState>;
export declare function useRadioGroup(): RadioGroupState;
