import React, { useMemo, useRef } from 'react';
import { bindClassNames } from '../../utils/classNames';
import { forwardRefWithAs } from '../../utils/forwardRef';
import { useMergeRef } from '../../utils/refUtils';
import { getFirstFocusableDescendant } from '../../utils/focusUtils';
import { useRefEffect } from '../../hooks/useRefEffect';
import { useListNav } from '../../hooks/useListNav';
import { useAutoScroll } from '../../hooks/useAutoScroll';
import { ButtonGroup } from '../ButtonGroup';
import { TabListContext } from './TabListContext';
import styles from './Tabs.module.scss';
const cx = bindClassNames(styles);
/**
 * Wraps a list of navigation tabs, with accessibility role `tablist`.
 *
 * Provides a context, with a `selected`, `onChange` and stylistic props to manage the selected tab state
 * and rendering of children.
 */
export const TabList = forwardRefWithAs((props, ref) => {
    const { as, size = 'md', variant, bordered, selected, onChange, children, direction = 'horizontal', className, ...otherProps } = props;
    const containerRef = useRef(null);
    const listBoxRef = useListNav({
        direction,
        itemQuerySelector: '[role="tab"]',
    });
    const rootRef = useRefEffect((rootEl) => {
        containerRef.current = rootEl;
        // make the first tab focusable
        const firstChild = getFirstFocusableDescendant(rootEl, true);
        if (firstChild) {
            firstChild.setAttribute('tabindex', '0');
        }
    }, []);
    const mergedRef = useMergeRef(ref, listBoxRef, rootRef);
    useAutoScroll(containerRef.current);
    const contextValue = useMemo(() => ({
        selected,
        variant,
        direction,
        size,
        onChange: (id) => {
            if (onChange)
                onChange(id);
        },
    }), [variant, selected, onChange, direction, size]);
    return (<TabListContext.Provider value={contextValue}>
      <ButtonGroup as={as} aria-orientation={direction} direction={direction} role="tablist" ref={mergedRef} className={cx('root', direction && `--${direction}`, bordered && '--bordered', className)} {...otherProps}>
        {children}
      </ButtonGroup>
    </TabListContext.Provider>);
});
TabList.displayName = 'TabList';
export default TabList;
