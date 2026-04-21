import React from 'react';
import classnames from 'classnames/bind';
import { useTranslation } from 'react-i18next';

import logo from 'renderer/assets/logo.svg';
import { Icon } from 'renderer/components';

import Credits from './Credits';
import { CREDIT_ITEMS } from './constants';

import styles from './About.module.scss';
import Changelog from './Changelog';

const cx = classnames.bind(styles);

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div
      className={cx('base')}
      style={{ maxWidth: '80rem', marginLeft: 'auto', marginRight: 'auto', padding: '16px' }}
    >
      <div className={cx('header')}>
        <img className={cx('logo')} src={logo} alt="" />
        <h1 className={cx('appname')}>
          MIDI Jar <span className={`badge ${cx('version')}`}>{process.env.APP_VERSION}</span>
        </h1>
        <div className={cx('author')}>
          {t('settings.aboutSettings.byAuthor')}
          <a href="https://ljas.fr" target="_blank" rel="noreferrer" className="link">
            {t('settings.aboutSettings.laJarreASon')}
          </a>
        </div>
      </div>
      {window.os.isWindows ? (
        <div className={cx('loopMidi')}>
          <p>
            {t('settings.aboutSettings.windowsNote')}
            <a
              href="https://www.tobias-erichsen.de/software/loopmidi.html"
              target="_blank"
              className="link"
              rel="noreferrer"
            >
              {t('settings.aboutSettings.loopMidi')}
            </a>
            {t('settings.aboutSettings.loopMidiNote')}
          </p>
          <div className="flex justify-end">
            <a
              className="btn btn-neutral"
              target="_blank"
              rel="noreferrer"
              href="https://www.tobias-erichsen.de/software/loopmidi.html"
            >
              <Icon name="midi" />
              {t('settings.aboutSettings.downloadLoopMidi')}
            </a>
          </div>
        </div>
      ) : null}
      <h2 className={cx('title')}>{t('settings.aboutSettings.features')}</h2>
      <div className={cx('description')}>
        <p>{t('settings.aboutSettings.featuresDescription')}</p>
        <ul>
          <li>{t('settings.aboutSettings.featureRoute')}</li>
          <li>{t('settings.aboutSettings.featureDisplay')}</li>
          <li>{t('settings.aboutSettings.featureIntegrate')}</li>
          <li>{t('settings.aboutSettings.featureLearn')}</li>
        </ul>
        <p>
          {t('settings.aboutSettings.planToAdd')}
          <a
            className="btn btn-sm btn-neutral"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/la-jarre-a-son/midi-jar/issues/new?labels=bug&template=1-Bug_report.md"
          >
            <Icon name="github" />
            {t('settings.aboutSettings.reportBug')}
          </a>
          {t('settings.aboutSettings.or')}
          <a
            className="btn btn-sm btn-neutral"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/la-jarre-a-son/midi-jar/issues/new?labels=enhancement&template=2-Feature_request.md"
          >
            <Icon name="github" />
            {t('settings.aboutSettings.requestFeature')}
          </a>
        </p>
      </div>
      <h2 className={cx('title')}>{t('settings.aboutSettings.changelog')}</h2>
      <Changelog />
      <h2 className={cx('title')}>{t('settings.aboutSettings.specialMentions')}</h2>
      <div className={cx('description')}>
        <p>{t('settings.aboutSettings.specialMentionsDescription')}</p>
      </div>
      <Credits items={CREDIT_ITEMS} />
    </div>
  );
};

export default About;
