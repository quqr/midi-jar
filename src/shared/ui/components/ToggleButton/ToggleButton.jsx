import React from 'react';
import { forwardRefWithAs } from '../../utils/forwardRef';
import { Button } from '../Button';
/**
 * Renders a Button with an aditionnal pressed state controlled with the `selected` prop.
 *
 * This component accept all the props of the `Button` component, minus the `variant` and `intent` that depends on the selected state.
 */
export const ToggleButton = forwardRefWithAs((props, ref) => {
    const { as, variant = 'filled', intent = 'neutral', selected = false, children, selectedIntent = 'primary', selectedVariant = 'filled', ...otherProps } = props;
    return (<Button as={as} ref={ref} {...otherProps} variant={selected ? selectedVariant : variant} intent={selected ? selectedIntent : intent} aria-pressed={!!selected}>
      {children}
    </Button>);
});
ToggleButton.displayName = 'ToggleButton';
export default ToggleButton;
