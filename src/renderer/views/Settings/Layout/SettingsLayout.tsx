import React from 'react';
import classnames from 'classnames/bind';
import { Outlet } from 'react-router-dom';

import { SidebarContainer, TabList, Toolbar } from '@la-jarre-a-son/ui';
import { useTranslation } from 'react-i18next';
import { NavTab, Icon } from 'renderer/components';

import styles from './SettingsLayout.module.scss';

const cx = classnames.bind(styles);

const SettingsLayout: React.FC = () => {
  const { t } = useTranslation();

  return (
    <SidebarContainer
      className={cx('base')}
      sidebar={
        <>
          <TabList
            className={cx('navigation')}
            aria-label={t('settings.navigation')}
            direction="vertical"
            variant="ghost"
          >
            <NavTab
              className={cx('tab')}
              to="/settings/general"
              title={t('settings.general')}
              left={<Icon name="window" />}
            >
              <span className={cx('label')}>{t('settings.general')}</span>
            </NavTab>
            <NavTab
              className={cx('tab')}
              to="/settings/routing"
              title={t('settings.routing')}
              left={<Icon name="routing" />}
            >
              <span className={cx('label')}>{t('settings.routing')}</span>
            </NavTab>
            <NavTab
              className={cx('tab')}
              to="/settings/notation"
              title={t('settings.musicNotation')}
              left={<Icon name="music" />}
            >
              <span className={cx('label')}>{t('settings.musicNotation')}</span>
            </NavTab>
            <NavTab
              className={cx('tab')}
              to="/settings/chord-dictionary"
              title={t('settings.chordDictionary')}
              left={<Icon name="dictionary" />}
            >
              <span className={cx('label')}>{t('settings.chordDictionary')}</span>
            </NavTab>
            <NavTab
              className={cx('tab')}
              to="/settings/chords"
              title={t('settings.chordDisplay')}
              left={<Icon name="piano" />}
            >
              <span className={cx('label')}>{t('settings.chordDisplay')}</span>
            </NavTab>
            <NavTab
              className={cx('tab')}
              to="/settings/circle-of-fifths"
              title={t('settings.circleOf5th')}
              left={<Icon name="circle-of-fifths" />}
            >
              <span className={cx('label')}>{t('settings.circleOf5th')}</span>
            </NavTab>
            <NavTab
              className={cx('tab')}
              to="/settings/quiz"
              title={t('settings.chordQuiz')}
              left={<Icon name="quiz" />}
            >
              <span className={cx('label')}>{t('settings.chordQuiz')}</span>
            </NavTab>
            <NavTab
              className={cx('tab')}
              to="/settings/debug"
              title={t('settings.debugger')}
              left={<Icon name="bug" />}
            >
              <span className={cx('label')}>{t('settings.debugger')}</span>
            </NavTab>
            <NavTab
              className={cx('tab')}
              to="/settings/licenses"
              title={t('settings.licenses')}
              left={<Icon name="copyright" />}
            >
              <span className={cx('label')}>{t('settings.licenses')}</span>
            </NavTab>
            <NavTab
              className={cx('tab')}
              to="/settings/about"
              title={t('settings.about')}
              left={<Icon name="info" />}
            >
              <span className={cx('label')}>{t('settings.about')}</span>
            </NavTab>
          </TabList>
          <Toolbar className={cx('footer')} elevation={2} placement="bottom">
            v{process.env.APP_VERSION}
          </Toolbar>
        </>
      }
      size="sm"
      sidebarProps={{ className: cx('sidebar') }}
      contentProps={{ className: cx('content') }}
      open
      inset
    >
      <Outlet />
    </SidebarContainer>
  );
};

export default SettingsLayout;
