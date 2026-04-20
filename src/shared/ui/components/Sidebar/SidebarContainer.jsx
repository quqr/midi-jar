import React, { useMemo, useRef } from 'react';
import { bindClassNames } from '../../utils/classNames';
import { forwardRefWithAs } from '../../utils/forwardRef';
import { useId } from '../../hooks/useId';
import { useAnimationDuration } from '../../hooks/useAnimationDuration';
import styles from './Sidebar.module.scss';
const cx = bindClassNames(styles);
/* Props */
export const SidebarSizes = ['xs', 'sm', 'md', 'lg', 'xl'];
export const SidebarPlacements = ['top', 'bottom', 'left', 'right'];
/**
 * Generates a grid style with unique ids corresponding to a placement
 * @param id - the component id
 * @param placement - placement of sidebar
 * @returns
 */
function getGridStyle(id, placement) {
    switch (placement) {
        case 'top':
            return {
                display: 'grid',
                gridTemplateColumns: '1fr',
                gridTemplateRows: 'auto 1fr',
                gridTemplateAreas: `"sidebar-${id}" "content-${id}"`,
            };
        case 'bottom':
            return {
                display: 'grid',
                gridTemplateColumns: '1fr',
                gridTemplateRows: '1fr auto',
                gridTemplateAreas: `"content-${id}" "sidebar-${id}"`,
            };
        case 'left':
            return {
                display: 'grid',
                gridTemplateColumns: 'auto 1fr',
                gridTemplateRows: '1fr',
                gridTemplateAreas: `"sidebar-${id} content-${id}"`,
            };
        case 'right':
            return {
                display: 'grid',
                gridTemplateColumns: '1fr auto',
                gridTemplateRows: '1fr',
                gridTemplateAreas: `"content-${id} sidebar-${id}"`,
            };
    }
}
/**
 * Provides a container for a Sidebar with show/hide control and custom placement & size
 */
export const SidebarContainer = forwardRefWithAs(({ as, className, open, placement = 'left', size = 'md', inset, style: originalStyle, children, sidebar, sidebarProps = {}, contentProps = {}, animationProps = {}, ...otherProps }, ref) => {
    const initiallyOpen = useRef(!!open);
    if (!open && initiallyOpen.current) {
        initiallyOpen.current = false;
    }
    const id = useId();
    const Element = as || 'div';
    const { className: sidebarClassName, style: sidebarStyle = {}, as: sidebarAs, ...otherSidebarProps } = sidebarProps || {};
    const { className: contentClassName, style: contentStyle = {}, as: contentAs, ...otherContentProps } = contentProps || {};
    const SidebarElement = sidebarAs || 'aside';
    const ContainerElement = contentAs || 'div';
    const style = useMemo(() => getGridStyle(id || '', placement), [id, placement]);
    const [show, onAnimationEnd] = useAnimationDuration(open, animationProps);
    return (<Element ref={ref} className={cx(className, 'root', open ? '--show' : '--hide', initiallyOpen.current && '--initiallyOpen', size && `--${size}`, placement && `--${placement}`)} style={{ ...originalStyle, ...style }} {...otherProps}>
        {show || initiallyOpen.current ? (<SidebarElement className={cx('sidebar', inset && '--inset', sidebarClassName)} style={{ ...sidebarStyle, gridArea: 'sidebar-' + id }} {...otherSidebarProps} onAnimationEnd={onAnimationEnd}>
            {sidebar}
          </SidebarElement>) : null}
        <ContainerElement className={cx('content', contentClassName)} style={{ ...contentStyle, gridArea: 'content-' + id }} {...otherContentProps}>
          {children}
        </ContainerElement>
      </Element>);
});
SidebarContainer.displayName = 'SidebarContainer';
export default SidebarContainer;
