import { createContext, useContext } from 'react';
export const RadioGroupContext = createContext({});
export function useRadioGroup() {
    return useContext(RadioGroupContext);
}
