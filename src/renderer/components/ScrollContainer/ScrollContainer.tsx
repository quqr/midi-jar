import React from 'react';

type Props = React.HTMLAttributes<HTMLDivElement> & { className?: string };

export const ScrollContainer: React.FC<Props> = ({ className, children, ...rest }) => {
  return (
    <div
      className={`flex-grow flex-shrink overflow-auto bg-base-200 rounded-box p-4 ${
        className ?? ''
      }`}
      {...rest}
    >
      {children}
    </div>
  );
};

ScrollContainer.defaultProps = {
  className: undefined,
};

export default ScrollContainer;
