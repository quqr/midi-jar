type ButtonProps = {
    /**
     * The parent onKeyDown event
     */
    onKeyDown?: (e: React.KeyboardEvent<HTMLElement>) => void;
    /**
     * The parent onClick event
     */
    onClick?: (e: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>) => void;
    /**
     * Is the element disabled
     */
    disabled?: boolean;
    /**
     * Disable all the hook behaviour
     */
    disableBehaviour?: boolean;
};
/**
 * Hook managing commons props for element with button role
 */
export declare function useButtonEvents(props?: ButtonProps): {
    handleKeyDown: ((e: React.KeyboardEvent<HTMLElement>) => void) | undefined;
    handleClick: ((e: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>) => void) | undefined;
    tabIndex?: undefined;
} | {
    handleKeyDown: (e: React.KeyboardEvent<HTMLElement>) => void;
    handleClick: (e: React.MouseEvent<HTMLElement>) => void;
    tabIndex: number;
};
export default useButtonEvents;
