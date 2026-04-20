import React from 'react';
export type TabsProviderState = {
    selectedTab?: string;
    selectedPanel?: string;
    setActive: (id: string) => void;
    bindIds: () => void;
};
export type TabsProviderProps = {
    /**
     * Specifies the index of the tab selected by default
     */
    defaultSelected?: number;
    /**
     * Content that will use the TabsProvider context,
     * or a render function that receives the state of the provided context
     */
    children: React.ReactNode | ((providerState: TabsProviderState) => React.ReactNode);
};
/**
 * Provides a navigation context for TabList and TabPanel to be in sync, and accessible with correct aria attributes.
 */
export declare const TabsProvider: import("../../utils/forwardRef").FunctionComponentWithAs<"div", TabsProviderProps>;
export declare function useTabsActive(): TabsProviderState;
export default TabsProvider;
