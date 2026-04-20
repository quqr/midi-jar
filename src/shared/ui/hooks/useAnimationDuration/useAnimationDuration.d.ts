import React from 'react';
/**
 * Globally disable UI animation
 */
export declare const disableAnimation: () => void;
/**
 * Globally enable UI animation
 */
export declare const enableAnimation: () => void;
/**
 * Check the current animation enabling
 */
export declare const isAnimationDisabled: () => boolean;
export type AnimationDurationOptions = {
    /**
     * The on animation end callback
     */
    onAnimationEnd?: (e?: React.AnimationEvent<HTMLElement>) => void;
    /**
     * An optionnal animation duration.
     * Setting this option will make this hook work with timer rather than onAnimationEnd callback.
     */
    duration?: number;
    /**
     * On entering animation end
     */
    onEntered?: () => void;
    /**
     * On exieting animation end
     */
    onExited?: () => void;
};
/**
 * Hook that defer the raise of a boolean trigger
 * after the end of an animation
 * @param start the element entry flag
 * @param options the duration options
 */
export declare function useAnimationDuration(start?: boolean, options?: AnimationDurationOptions): readonly [boolean, (e?: React.AnimationEvent<HTMLElement>) => void];
export default useAnimationDuration;
