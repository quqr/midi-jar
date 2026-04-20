import React, { useState, useCallback, useRef, useEffect } from 'react';
import { bindClassNames } from '../../utils/classNames';
import { forwardRefWithAs } from '../../utils/forwardRef';
import { Button } from '../Button';
import { Icon } from '../Icon';
import styles from './StateButton.module.scss';
const cx = bindClassNames(styles);
function FeedbackRender({ status, iconPending, iconError, iconSuccess, }) {
    return (<span className={cx('feedback')}>
      {status === 'pending' && <Icon name={iconPending} spin/>}
      {status === 'success' && <Icon name={iconSuccess}/>}
      {status === 'error' && <Icon name={iconError}/>}
    </span>);
}
/**
 * Renders a button with a loading, success or error state depending on a Promise.
 *
 * You can pass a `promise` as props, or return a Promise in the `onClick` handler.
 * You can also control the pending state directly with `loading`
 */
export const StateButton = forwardRefWithAs(({ as, className, children, promise, loading, onClick, iconPending, iconSuccess, iconError, ...otherProps }, ref) => {
    const [status, setStatus] = useState(null);
    const currentPromise = useRef(promise || null);
    const currentTimeout = useRef(null);
    const startTimeout = useCallback(() => {
        if (currentTimeout.current) {
            clearTimeout(currentTimeout.current);
        }
        currentTimeout.current = setTimeout(() => {
            setStatus(null);
            currentTimeout.current = null;
        }, StateButton.FEEDBACK_DURATION);
    }, [setStatus]);
    const handlePromiseSuccess = useCallback((resolvedPromise) => {
        if (currentPromise?.current === resolvedPromise) {
            setStatus('success');
            startTimeout();
        }
    }, [setStatus, startTimeout]);
    const handlePromiseError = useCallback((resolvedPromise) => {
        if (currentPromise?.current === resolvedPromise) {
            setStatus('error');
            startTimeout();
        }
    }, [currentPromise, setStatus, startTimeout]);
    const handleClick = useCallback((event) => {
        if (onClick) {
            const result = onClick(event);
            // if promise
            if (typeof result?.then === 'function') {
                currentPromise.current = result;
                setStatus('pending');
                result.then(() => handlePromiseSuccess(result)).catch(() => handlePromiseError(result));
            }
        }
        return null;
    }, [handlePromiseError, handlePromiseSuccess, onClick]);
    useEffect(() => {
        if (promise) {
            currentPromise.current = promise;
            setStatus('pending');
            promise.then(() => handlePromiseSuccess(promise)).catch(() => handlePromiseError(promise));
        }
        else {
            if (currentPromise.current) {
                setStatus(null);
            }
            currentPromise.current = null;
        }
    }, [promise, handlePromiseSuccess, handlePromiseError]);
    useEffect(() => () => {
        currentPromise.current = null;
        if (currentTimeout.current) {
            clearTimeout(currentTimeout.current);
        }
    }, []);
    const Element = as || Button;
    return (<Element as={as} ref={ref} className={cx('root', {
            '--pending': loading || status === 'pending',
            '--error': !loading && status === 'error',
            '--success': !loading && status === 'success',
        }, className)} onClick={handleClick} {...otherProps}>
        {typeof children === 'string' ? <span className={cx('label')}>{children}</span> : children}
        <FeedbackRender status={loading ? 'pending' : status} iconPending={iconPending ?? StateButton.ICON_PENDING} iconSuccess={iconSuccess ?? StateButton.ICON_SUCCESS} iconError={iconError ?? StateButton.ICON_ERROR}/>
      </Element>);
});
StateButton.FEEDBACK_DURATION = 1500;
StateButton.ICON_PENDING = 'fi fi-rr-spinner';
StateButton.ICON_SUCCESS = 'fi fi-rr-check';
StateButton.ICON_ERROR = 'fi fi-rr-cross';
StateButton.displayName = 'StateButton';
export default StateButton;
