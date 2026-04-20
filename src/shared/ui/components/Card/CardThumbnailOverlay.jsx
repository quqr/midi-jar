import React from 'react';
import { bindClassNames } from '../../utils/classNames';
import { forwardRefWithAs } from '../../utils/forwardRef';
import styles from './Card.module.scss';
const cx = bindClassNames(styles);
/**
 * Renders an overlay for card thumbnails, to highlight interactions or improve contrast.
 *
 * Must be used inside a CardThumbnail.
 */
export const CardThumbnailOverlay = forwardRefWithAs((props, ref) => {
    const { children, as, className, interactive, ...otherProps } = props;
    const Element = as || 'div';
    return (<Element ref={ref} className={cx('thumbnailOverlay', interactive && '--thumbnailInteractive', className)} {...otherProps}>
        {children}
      </Element>);
});
CardThumbnailOverlay.displayName = 'CardThumbnailOverlay';
export default CardThumbnailOverlay;
