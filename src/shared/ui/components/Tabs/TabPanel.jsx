import React from 'react';
import { forwardRefWithAs } from '../../utils/forwardRef';
import { useId } from '../../hooks/useId';
import { useTabsActive } from './TabsProvider';
/**
 * Wraps a content to be conditionally rendered when its associated Tab is selected.
 *
 * To be used inside a TabProvider.
 */
export const TabPanel = forwardRefWithAs((props, ref) => {
    const { children, as, className, selected, id, ...otherProps } = props;
    const uid = useId(id);
    const { selectedPanel } = useTabsActive();
    const isActive = selected ?? selectedPanel === uid;
    const Element = as || 'div';
    return (<Element ref={ref} hidden={!isActive} role="tabpanel" className={className} id={uid} {...otherProps}>
      {isActive && children}
    </Element>);
});
TabPanel.displayName = 'TabPanel';
export default TabPanel;
