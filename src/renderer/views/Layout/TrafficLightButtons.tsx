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
    <div className={classnames('join', className)}>
      <button
        type="button"
        className="join-item btn btn-warning btn-ghost btn-sm"
        aria-label={t('layout.minimize')}
        onClick={handleEvent(minimize)}
      >
        <Icon name="minimize" />
      </button>
      {windowState.maximized ? (
        <button
          type="button"
          className="join-item btn btn-success btn-ghost btn-sm"
          aria-label={t('layout.unmaximize')}
          onClick={handleEvent(unmaximize)}
        >
          <Icon name="unmaximize" />
        </button>
      ) : (
        <button
          type="button"
          className="join-item btn btn-success btn-ghost btn-sm"
          aria-label={t('layout.maximize')}
          onClick={handleEvent(maximize)}
        >
          <Icon name="maximize" />
        </button>
      )}
      <button
        type="button"
        className="join-item btn btn-error btn-ghost btn-sm"
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
