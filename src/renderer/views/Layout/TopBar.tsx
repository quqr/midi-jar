import React from 'react';
import classnames from 'classnames';

import { useTranslation } from 'react-i18next';

import { useWindowState } from 'renderer/contexts/WindowState';
import { NavButton, Icon } from 'renderer/components';

import AppBreadcrumb from './AppBreadcrumb';
import TrafficLightButtons from './TrafficLightButtons';

const TopBar: React.FC = () => {
  const { windowState, titleBarDoubleClick, setAlwaysOnTop } = useWindowState();
  const { t } = useTranslation();

  const toggleAlwaysOnTop = () => {
    setAlwaysOnTop(!windowState.alwaysOnTop);
  };

  return (
    <div
      className={classnames(
        'flex items-center gap-3 bg-base-200 py-3 px-3 border-b border-base-300 shadow-sm [--Toolbar_gap:0]',
        {
          'pl-[72px]': window.os?.isMac,
        }
      )}
    >
      <AppBreadcrumb />
      <div
        className="-webkit-app-region-drag flex items-center mx-4 flex-grow h-full uppercase"
        onDoubleClick={titleBarDoubleClick}
      />
      <div className="flex items-center gap-2">
        <NavButton
          to="/settings"
          aria-label={t('common.settings')}
          className="btn btn-ghost btn-sm transition-all duration-200 hover:scale-105 hover:shadow-md"
        >
          <Icon name="settings" />
        </NavButton>
        <button
          type="button"
          className={classnames(
            'btn btn-sm transition-all duration-200 hover:scale-105 hover:shadow-md',
            {
              'btn-active btn-warning': windowState.alwaysOnTop,
            }
          )}
          onClick={toggleAlwaysOnTop}
          aria-label={t('layout.alwaysOnTop')}
        >
          <Icon name="pin" />
        </button>
        <button
          type="button"
          className="btn btn-error btn-ghost btn-sm transition-all duration-200 hover:scale-105 hover:shadow-md"
          aria-label={t('layout.quitApp')}
          onClick={window.app.quit}
        >
          <Icon name="power" />
        </button>
      </div>
      {window.os?.isWindows && <TrafficLightButtons className="ml-4" />}
    </div>
  );
};

export default TopBar;
