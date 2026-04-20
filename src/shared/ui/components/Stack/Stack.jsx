import React from 'react';
import { bindClassNames } from '../../utils/classNames';
import { forwardRefWithAs } from '../../utils/forwardRef';
import styles from './Stack.module.scss';
const cx = bindClassNames(styles);
/* Props */
export const StackDirections = ['horizontal', 'vertical'];
export const StackAligns = ['center', 'end', 'start', 'stretch'];
export const StackJustifies = [
    ...StackAligns,
    'space-around',
    'space-between',
    'space-evenly',
];
export const StackGaps = ['xs', 'sm', 'md', 'lg', 'xl'];
/**
 * Wraps and arranges a stack of items.
 *
 * This component use the most common flex box positioning
 */
export const Stack = forwardRefWithAs((props, ref) => {
    const { children, as, className, align, justify, direction, wrap, gap, block, stretch, ...otherProps } = props;
    const Element = as || 'div';
    return (<Element ref={ref} className={cx('root', align && `--align-${align}`, justify && `--justify-${justify}`, gap && `--gap-${gap}`, wrap && '--wrap', block && '--block', stretch && '--stretch', direction && `--${direction}`, className)} {...otherProps}>
      {children}
    </Element>);
});
Stack.displayName = 'Stack';
export default Stack;
