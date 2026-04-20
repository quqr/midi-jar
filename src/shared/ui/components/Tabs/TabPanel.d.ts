import React from 'react';
export type TabPanelProps = {
    /**
     * Specifies that the panel is selected
     */
    selected?: boolean;
    /**
     * Content of the panel - rendered only when corresponding tab is selected
     */
    children?: React.ReactNode;
};
/**
 * Wraps a content to be conditionally rendered when its associated Tab is selected.
 *
 * To be used inside a TabProvider.
 */
export declare const TabPanel: import("../../utils/forwardRef").FunctionComponentWithAs<"div", TabPanelProps>;
export default TabPanel;
