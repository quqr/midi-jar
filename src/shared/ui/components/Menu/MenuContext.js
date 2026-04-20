import { createContext, useContext } from 'react';
export const MenuContext = createContext({
    onChange: () => undefined,
});
export function useMenu() {
    return useContext(MenuContext);
}
