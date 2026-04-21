import React from 'react';
import classnames from 'classnames/bind';
import { Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useWindowState } from 'renderer/contexts/WindowState';

import About from 'renderer/views/Settings/About';

import TopBar from './TopBar';

import styles from './Layout.module.scss';
import BottomBar from './BottomBar';

const cx = classnames.bind(styles);

const Layout: React.FC = () => {
  const { windowState, updateInfo, dismissChangelog, dismissUpdate } = useWindowState();
  const { t } = useTranslation();

  const closeAboutModalOpen = () => {
    dismissChangelog();
  };

  const closeUpdateModalOpen = () => {
    dismissUpdate(updateInfo?.version || '');
  };

  return (
    <div className={cx('base')}>
      <TopBar />
      <div className={cx('content')}>
        <Outlet />
      </div>
      <dialog className={cx('modal', { 'modal-open': !windowState.changelogDismissed })}>
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg">{t('layout.midiJar')}</h3>
          <div className="py-4">
            <About />
          </div>
          <div className="modal-action">
            <form method="dialog">
              <button type="button" className="btn" onClick={closeAboutModalOpen}>
                {t('common.close')}
              </button>
            </form>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button type="button" onClick={closeAboutModalOpen}>
            close
          </button>
        </form>
      </dialog>
      {!!updateInfo && (
        <dialog className={cx('modal', { 'modal-open': !windowState.updateDismissed })}>
          <div className="modal-box w-11/12 max-w-sm">
            <h3 className="font-bold text-lg">{t('layout.updateAvailable')}</h3>
            <div className="py-4">{t('layout.updateMessage', { version: updateInfo.version })}</div>
            <div className="modal-action">
              <a
                className="btn btn-primary w-full"
                href={`https://github.com/la-jarre-a-son/midi-jar/releases/tag/v${updateInfo.version}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeUpdateModalOpen}
              >
                {t('layout.goToReleasePage')}
              </a>
            </div>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button type="button" onClick={closeUpdateModalOpen}>
              close
            </button>
          </form>
        </dialog>
      )}
      <BottomBar />
    </div>
  );
};

export default Layout;
