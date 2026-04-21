import React from 'react';
import classNames from 'classnames/bind';

import styles from './ScrollContainer.module.scss';

const cx = classNames.bind(styles);

type Props = React.HTMLAttributes<HTMLDivElement> & { className?: string };

export const ScrollContainer: React.FC<Props> = ({ className, children, ...rest }) => {
  return (
    <div className={cx('base', 'bg-base-200', 'rounded-box', 'p-4', className)} {...rest}>
      {children}
    </div>
  );
};

ScrollContainer.defaultProps = {
  className: undefined,
};

export default ScrollContainer;
