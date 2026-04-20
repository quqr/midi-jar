import React from 'react';
export type OptionEvents = {
    /**
     * The onChange callback to call when selecting an item
     */
    onChange?: () => void;
    /**
     * The parent onKeyDown event
     */
    onKeyDown?: (e: React.KeyboardEvent<HTMLElement>) => void;
    /**
     * The parent onClick event
     */
    onClick?: (e: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>) => void;
};
/**
 * Basic event interaction for a select option item
 */
export declare function useOptionEvents(options?: OptionEvents): {
    handleKeyDown: (e: React.KeyboardEvent<HTMLElement>) => void;
    handleClick: (e: React.MouseEvent<HTMLElement>) => void;
};
export default useOptionEvents;
