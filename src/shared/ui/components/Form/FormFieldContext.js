import { createContext, useContext } from 'react';
export const FormFieldContext = createContext({
    inputProps: {},
});
export function useFormField() {
    return useContext(FormFieldContext);
}
