import { useEvent } from '../../hooks/useEvent';
import { useDropdown } from '../Dropdown';
import { useSelect } from './SelectContext';
/**
 * Basic event interaction for a select option item
 */
export function useOptionEvents(options) {
    const { onKeyDown, onClick, onChange } = options || {};
    const closeDropdown = useDropdown();
    const { refocusTrigger, keepOpened } = useSelect();
    const handleKeyDown = useEvent((e) => {
        if (onKeyDown)
            onKeyDown(e);
        if (e.key === ' ' || e.key === 'Enter') {
            e.preventDefault();
            e.stopPropagation();
            if (onClick)
                onClick(e);
            if (!keepOpened && closeDropdown) {
                closeDropdown({
                    bubble: true,
                    refocus: true,
                });
                refocusTrigger();
            }
            if (onChange)
                onChange();
        }
    });
    const handleClick = useEvent((e) => {
        e.preventDefault();
        e.stopPropagation();
        if (onClick)
            onClick(e);
        if (!keepOpened && closeDropdown) {
            closeDropdown({
                bubble: true,
            });
            refocusTrigger();
        }
        if (onChange)
            onChange();
    });
    return {
        handleKeyDown,
        handleClick,
    };
}
export default useOptionEvents;
