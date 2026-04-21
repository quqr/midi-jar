import React from 'react';
import classnames from 'classnames';

import { useTranslation } from 'react-i18next';

import { useWindowState } from 'renderer/contexts/WindowState';
import { NavButton, Icon } from 'renderer/components';

import AppBreadcrumb from './AppBreadcrumb';
import TrafficLightButtons from './TrafficLightButtons';

import styles from './Layout.module.scss';

const TopBar: React.FC = () => {
  const { windowState, titleBarDoubleClick, setAlwaysOnTop } = useWindowState();
  const { t } = useTranslation();

  const toggleAlwaysOnTop = () => {
    setAlwaysOnTop(!windowState.alwaysOnTop);
  };

  return (
    <div
      className={classnames(
        'flex items-center gap-3 bg-base-200 py-3 px-3 border-b border-base-300 shadow-sm',
        styles.topbar,
        {
          'topbar--isMac': window.os?.isMac,
        }
      )}
    >
      <AppBreadcrumb />
      <div className={styles.titlebar} onDoubleClick={titleBarDoubleClick} />
      <div className="join">
        <NavButton
          to="/settings"
          aria-label={t('common.settings')}
          className="join-item btn btn-sm"
        >
          <Icon name="settings" />
        </NavButton>
        <button
          type="button"
          className={classnames('join-item btn btn-sm', {
            'btn-active': windowState.alwaysOnTop,
            'btn-warning': windowState.alwaysOnTop,
          })}
          onClick={toggleAlwaysOnTop}
          aria-label={t('layout.alwaysOnTop')}
        >
          <Icon name="pin" />
        </button>
        <button
          type="button"
          className="join-item btn btn-error btn-ghost btn-sm"
          aria-label={t('layout.quitApp')}
          onClick={window.app.quit}
        >
          <Icon name="power" />
        </button>
      </div>
      {window.os?.isWindows && <TrafficLightButtons className={styles.trafficLights} />}
    </div>
  );
};

export default TopBar;
