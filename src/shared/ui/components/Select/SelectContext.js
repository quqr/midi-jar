import { createContext, useContext } from 'react';
export const SelectContext = createContext({
    onChange: () => undefined,
    refocusTrigger: () => undefined,
});
export function useSelect() {
    return useContext(SelectContext);
}
