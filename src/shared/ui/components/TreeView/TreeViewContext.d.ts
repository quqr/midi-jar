export type TreeViewContextState = {
    depth?: number;
    parentId?: string;
};
export declare const TreeViewContext: import("react").Context<TreeViewContextState>;
export declare function useTreeView(): TreeViewContextState;
