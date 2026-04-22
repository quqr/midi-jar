import React from 'react';
import classnames from 'classnames';
import { useTranslation } from 'react-i18next';
import { Icon } from 'renderer/components';

import { useWindowState } from 'renderer/contexts/WindowState';

type Props = {
  className?: string;
};

const defaultProps = {
  className: undefined,
};

const TrafficLightButtons: React.FC<Props> = ({ className }) => {
  const { windowState, maximize, unmaximize, minimize, close } = useWindowState();
  const { t } = useTranslation();

  const handleEvent = (callback: () => void) => (event: React.MouseEvent<unknown>) => {
    (event.currentTarget as HTMLButtonElement)?.blur();
    callback();
  };

  return (
    <div className={classnames('flex items-center gap-2', className)}>
      <button
        type="button"
        className="btn btn-warning btn-outline btn-sm transition-all duration-200 hover:scale-105 hover:shadow-md"
        aria-label={t('layout.minimize')}
        onClick={handleEvent(minimize)}
      >
        <Icon name="minimize" />
      </button>
      {windowState.maximized ? (
        <button
          type="button"
          className="btn btn-success btn-outline btn-sm transition-all duration-200 hover:scale-105 hover:shadow-md"
          aria-label={t('layout.unmaximize')}
          onClick={handleEvent(unmaximize)}
        >
          <Icon name="unmaximize" />
        </button>
      ) : (
        <button
          type="button"
          className="btn btn-success btn-outline btn-sm transition-all duration-200 hover:scale-105 hover:shadow-md"
          aria-label={t('layout.maximize')}
          onClick={handleEvent(maximize)}
        >
          <Icon name="maximize" />
        </button>
      )}
      <button
        type="button"
        className="btn btn-error btn-outline btn-sm transition-all duration-200 hover:scale-105 hover:shadow-md"
        aria-label={t('common.close')}
        onClick={close}
      >
        <Icon name="cross" />
      </button>
    </div>
  );
};

TrafficLightButtons.defaultProps = defaultProps;

export default TrafficLightButtons;
