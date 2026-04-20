import React, { useState, useRef, useEffect } from 'react';
import { bindClassNames } from '../../utils/classNames';
import { forwardRefWithAs } from '../../utils/forwardRef';
import { Icon } from '../Icon';
import styles from './Avatar.module.scss';
const cx = bindClassNames(styles);
/* Props */
export const AvatarSizes = ['xs', 'sm', 'md', 'lg', 'xl'];
export const AvatarShapes = ['round', 'square'];
/**
 * Renders an User avatar, round or square, with an image or a text (user initials).
 */
export const Avatar = forwardRefWithAs((props, ref) => {
    const { as, alt, image, onLoad, onError, children, className, size, shape, outlined, online, ...otherProps } = props;
    const startLoadTime = useRef(Date.now());
    const Element = as || 'div';
    const [status, setStatus] = useState('idle');
    const [skipTransition, setSkipTransition] = useState(false);
    useEffect(() => {
        // start loading after mount to skip image loading on server side
        setStatus('loading');
        startLoadTime.current = Date.now();
    }, [image]);
    const handleLoad = (e) => {
        setStatus('loaded');
        if (Date.now() - startLoadTime.current < Avatar.TRANSITION_THRESHOLD) {
            setSkipTransition(true);
        }
        if (onLoad)
            onLoad(e);
    };
    const handleError = (e) => {
        setStatus('error');
        if (onError)
            onError(e);
    };
    return (<Element ref={ref} className={cx('root', size && `--${size}`, shape && `--${shape}`, outlined && `--outlined`, online && `--online`, status === 'loaded' && '--isLoaded', status === 'error' && '--hasError', skipTransition && '--skipTransition', className)} {...otherProps}>
      {children ||
            (status !== 'loaded' ? (<Icon className={cx('icon')} name={Avatar.ICON_USER} intent="subtle"/>) : null)}
      {status !== 'idle' && image && (<img className={cx('image')} src={image} alt={alt} onLoad={handleLoad} onError={handleError}/>)}
    </Element>);
});
Avatar.ICON_USER = 'fi fi-rr-user';
Avatar.TRANSITION_THRESHOLD = 60; // in milliseconds
Avatar.displayName = 'Avatar';
export default Avatar;
