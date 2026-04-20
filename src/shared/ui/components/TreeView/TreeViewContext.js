import { createContext, useContext } from 'react';
export const TreeViewContext = createContext({});
export function useTreeView() {
    return useContext(TreeViewContext);
}
