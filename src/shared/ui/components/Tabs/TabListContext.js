import { createContext, useContext } from 'react';
export const TabListContext = createContext({});
export function useTabList() {
    return useContext(TabListContext);
}
