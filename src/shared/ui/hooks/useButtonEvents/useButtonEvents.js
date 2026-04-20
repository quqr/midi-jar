import useEvent from '../useEvent';
/**
 * Hook managing commons props for element with button role
 */
export function useButtonEvents(props) {
    const { onKeyDown, onClick, disabled, disableBehaviour } = props || {};
    const handleKeyDown = useEvent((e) => {
        if (onKeyDown)
            onKeyDown(e);
        if ((e.key === ' ' || e.key === 'Enter') && !disabled) {
            if (onClick)
                onClick(e);
        }
        if (e.key === ' ') {
            e.preventDefault();
            e.stopPropagation();
        }
    });
    const handleClick = useEvent((e) => {
        if (onClick && !disabled)
            onClick(e);
    });
    if (disableBehaviour) {
        return {
            handleKeyDown: onKeyDown,
            handleClick: onClick,
        };
    }
    return {
        handleKeyDown,
        handleClick,
        tabIndex: disabled ? -1 : 0,
    };
}
export default useButtonEvents;
