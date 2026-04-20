import React, { useEffect } from 'react';
import { bindClassNames } from '../../utils/classNames';
import { forwardRefWithAs } from '../../utils/forwardRef';
import { useForkRef } from '../../utils/refUtils';
import { Icon } from '../Icon';
import styles from './Checkbox.module.scss';
const cx = bindClassNames(styles);
/**
 * Renders a checkbox element as a decorated input element, and `onChange` callback with boolean value.
 *
 * Checked state takes priority over the Indeterminate state.
 *
 * > All props passed to it will be passed to the input element,
 * > use the `wrapperProps` prop to pass props specifically to the wrapper root element.
 */
export const Checkbox = forwardRefWithAs((props, ref) => {
    const { className, as: inputAs, disabled, checked, indeterminate, onChange, wrapperProps: { as, ...otherWrapperProps } = {}, ...otherProps } = props;
    const Element = as || 'div';
    const InputElement = inputAs || 'input';
    const [ownRef, mergedRef] = useForkRef(ref);
    useEffect(() => {
        if (ownRef.current && ownRef.current.indeterminate !== undefined) {
            if (!checked && indeterminate) {
                ownRef.current.indeterminate = true;
            }
            else {
                ownRef.current.indeterminate = false;
            }
        }
    }, [checked, indeterminate, ownRef]);
    const handleChange = (e) => {
        if (onChange) {
            onChange(e.currentTarget.checked, e);
        }
    };
    return (<Element className={cx('root', {
            '--indeterminate': indeterminate,
            '--checked': checked,
            '--disabled': disabled,
        }, className)} {...otherWrapperProps}>
      <InputElement className={cx('input')} ref={mergedRef} type="checkbox" checked={checked} disabled={disabled} onChange={handleChange} {...otherProps}/>
      <div className={cx('wrapper')}>
        <Icon className={cx('icon')} name={indeterminate ? Checkbox.ICON_INDETERMINATE : Checkbox.ICON_CHECKED}/>
      </div>
    </Element>);
});
Checkbox.ICON_CHECKED = 'fi fi-rr-check';
Checkbox.ICON_INDETERMINATE = 'fi fi-rr-minus';
Checkbox.displayName = 'Checkbox';
export default Checkbox;
