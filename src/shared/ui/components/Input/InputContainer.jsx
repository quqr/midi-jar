import React from 'react';
import { bindClassNames } from '../../utils/classNames';
import { forwardRefWithAs } from '../../utils/forwardRef';
import { Icon } from '../Icon';
import styles from './InputContainer.module.scss';
const cx = bindClassNames(styles);
/* Props */
export const InputSizes = ['sm', 'md', 'lg'];
/**
 * Renders the container for an input.
 *
 * Should be used to decorate inputs with stylistic variants and states.
 */
export const InputContainer = forwardRefWithAs((props, ref) => {
    const { className, as, error, children, block, size = 'md', left, right, disabled, focused, ...otherProps } = props;
    const Element = as || 'div';
    return (<Element ref={ref} className={cx('root', size && `--${size}`, {
            '--hasError': !!error,
            '--isDisabled': !!disabled,
            '--focused': focused,
            '--block': block,
        }, className)} {...otherProps}>
        {left}
        {children}
        {right}
        {!!error && <Icon className={cx('errorIcon')} name={InputContainer.ICON_ERROR}/>}
      </Element>);
});
InputContainer.ICON_ERROR = 'fi fi-rr-exclamation';
InputContainer.displayName = 'InputContainer';
export default InputContainer;
