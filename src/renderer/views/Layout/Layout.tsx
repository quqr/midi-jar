import React from 'react';
import classnames from 'classnames/bind';
import { Outlet } from 'react-router-dom';
import {
  Button,
  ModalContainer,
  Modal,
  ModalContent,
  ModalHeader,
  ModalActions,
} from '@la-jarre-a-son/ui';
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
      <div className={cx('modalContainer')}>
        <ModalContainer>
          <div className={cx('content')}>
            <Outlet />
          </div>
          <Modal onClose={closeAboutModalOpen} open={!windowState.changelogDismissed} size="lg">
            <ModalHeader title={t('layout.midiJar')} />
            <ModalContent>
              <About />
            </ModalContent>
          </Modal>
          {!!updateInfo && (
            <Modal onClose={closeUpdateModalOpen} open={!windowState.updateDismissed} size="sm">
              <ModalHeader title={t('layout.updateAvailable')} />
              <ModalContent>
                {t('layout.updateMessage', { version: updateInfo.version })}
              </ModalContent>
              <ModalActions>
                <Button
                  block
                  as="a"
                  intent="primary"
                  href={`https://github.com/la-jarre-a-son/midi-jar/releases/tag/v${updateInfo.version}`}
                  target="_blank"
                >
                  {t('layout.goToReleasePage')}
                </Button>
              </ModalActions>
            </Modal>
          )}
        </ModalContainer>
      </div>
      <BottomBar />
    </div>
  );
};

export default Layout;
