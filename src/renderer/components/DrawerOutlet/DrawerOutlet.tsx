/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { useOutlet, useNavigate } from 'react-router-dom';

type Props = React.HTMLAttributes<HTMLDivElement> & {
  context?: unknown;
};

export const DrawerOutlet: React.FC<Props> = ({ context, className, ...rest }) => {
  const outletChildren = useOutlet(context);
  const [_hadChildren, setHadChildren] = useState(!!outletChildren);
  const [open, setOpen] = useState(!!outletChildren);

  const navigate = useNavigate();

  const handleClose = () => setOpen(false);
  const handleClosed = () => {
    navigate('.');
  };

  useEffect(() => {
    if (outletChildren) {
      setHadChildren((already) => {
        if (!already) {
          setOpen(true);
        }
        return true;
      });
    } else {
      setHadChildren(false);
    }
  }, [outletChildren]);

  if (!open || !outletChildren) {
    return null;
  }

  return (
    <div {...rest} className={`drawer drawer-end flex flex-col overflow-auto ${className ?? ''}`}>
      <input
        id="drawer-toggle"
        type="checkbox"
        checked={open}
        onChange={handleClose}
        className="drawer-toggle"
      />
      <div className="drawer-content">{outletChildren}</div>
      <div className="drawer-side">
        <div
          role="button"
          tabIndex={0}
          className="drawer-overlay"
          aria-hidden="true"
          onClick={handleClose}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              handleClose();
            }
          }}
        />
        <div className="bg-base-100 p-4 min-h-full w-80">{outletChildren}</div>
      </div>
    </div>
  );
};

DrawerOutlet.defaultProps = {
  context: undefined,
};

export default DrawerOutlet;
