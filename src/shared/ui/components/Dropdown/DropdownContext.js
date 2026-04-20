import { createContext, useContext } from 'react';
export const DropdownContext = createContext(null);
export function useDropdown() {
    return useContext(DropdownContext);
}
