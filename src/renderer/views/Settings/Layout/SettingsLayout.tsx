import React from 'react';
import classnames from 'classnames/bind';
import { Outlet } from 'react-router-dom';

import { useTranslation } from 'react-i18next';
import { NavTab, Icon } from 'renderer/components';

import styles from './SettingsLayout.module.scss';

const cx = classnames.bind(styles);

const SettingsLayout: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className={cx('base')}>
      <div className="flex h-full w-full">
        <aside className={cx('sidebar')}>
          <nav
            className={`flex flex-col h-full ${cx('navigation')}`}
            aria-label={t('settings.navigation')}
          >
            <div className="flex-1 px-3 py-4 space-y-1">
              <NavTab className={cx('tab')} to="/settings/general">
                <Icon name="window" />
                <span className={cx('label')}>{t('settings.general')}</span>
              </NavTab>
              <NavTab className={cx('tab')} to="/settings/routing">
                <Icon name="routing" />
                <span className={cx('label')}>{t('settings.routing')}</span>
              </NavTab>
              <NavTab className={cx('tab')} to="/settings/notation">
                <Icon name="music" />
                <span className={cx('label')}>{t('settings.musicNotation')}</span>
              </NavTab>
              <NavTab className={cx('tab')} to="/settings/chord-dictionary">
                <Icon name="dictionary" />
                <span className={cx('label')}>{t('settings.chordDictionary')}</span>
              </NavTab>
              <NavTab className={cx('tab')} to="/settings/chords">
                <Icon name="piano" />
                <span className={cx('label')}>{t('settings.chordDisplay')}</span>
              </NavTab>
              <NavTab className={cx('tab')} to="/settings/circle-of-fifths">
                <Icon name="circle-of-fifths" />
                <span className={cx('label')}>{t('settings.circleOf5th')}</span>
              </NavTab>
              <NavTab className={cx('tab')} to="/settings/quiz">
                <Icon name="quiz" />
                <span className={cx('label')}>{t('settings.chordQuiz')}</span>
              </NavTab>
              <NavTab className={cx('tab')} to="/settings/debug">
                <Icon name="bug" />
                <span className={cx('label')}>{t('settings.debugger')}</span>
              </NavTab>
              <NavTab className={cx('tab')} to="/settings/licenses">
                <Icon name="copyright" />
                <span className={cx('label')}>{t('settings.licenses')}</span>
              </NavTab>
              <NavTab className={cx('tab')} to="/settings/about">
                <Icon name="info" />
                <span className={cx('label')}>{t('settings.about')}</span>
              </NavTab>
            </div>
            <div className={cx('footer')}>
              <span>v{process.env.APP_VERSION}</span>
            </div>
          </nav>
        </aside>
        <main className={cx('content')}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default SettingsLayout;
