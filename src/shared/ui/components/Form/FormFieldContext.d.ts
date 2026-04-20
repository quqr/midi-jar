export type FormFieldContextValue = {
    label?: string;
    error?: string | null;
    labelId?: string;
    hintId?: string;
    inputProps: {
        id?: string;
        'aria-invalid'?: boolean;
        'aria-describedby'?: string;
    };
};
export declare const FormFieldContext: import("react").Context<FormFieldContextValue>;
export declare function useFormField(): FormFieldContextValue;
