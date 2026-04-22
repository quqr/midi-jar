import React from 'react';
import { useTranslation } from 'react-i18next';

import logo from 'renderer/assets/logo.svg';
import { Icon } from 'renderer/components';

import Credits from './Credits';
import { CREDIT_ITEMS } from './constants';

import Changelog from './Changelog';

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center p-4" style={{ maxWidth: '80rem' }}>
      <div className="card bg-base-200 shadow-xl w-full mb-6">
        <div className="card-body items-center text-center">
          <img className="w-[min(96px,16vh)]" src={logo} alt="" />
          <h1 className="card-title">
            MIDI Jar
            <span className="badge badge-primary">v{process.env.APP_VERSION}</span>
          </h1>
          <p className="text-base-content/70">
            {t('settings.aboutSettings.byAuthor')}
            <a
              href="https://ljas.fr"
              target="_blank"
              rel="noreferrer"
              className="link link-primary"
            >
              {t('settings.aboutSettings.laJarreASon')}
            </a>
          </p>
        </div>
      </div>

      {window.os.isWindows && (
        <div className="card bg-base-200 shadow-xl w-full mb-6">
          <div className="card-body">
            <p className="text-base-content/70">
              {t('settings.aboutSettings.windowsNote')}
              <a
                href="https://www.tobias-erichsen.de/software/loopmidi.html"
                target="_blank"
                className="link link-primary"
                rel="noreferrer"
              >
                {t('settings.aboutSettings.loopMidi')}
              </a>
              {t('settings.aboutSettings.loopMidiNote')}
            </p>
            <div className="card-actions justify-end">
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
        </div>
      )}

      <div className="card bg-base-200 shadow-xl w-full mb-6">
        <div className="card-body">
          <h2 className="card-title uppercase">{t('settings.aboutSettings.features')}</h2>
          <p>{t('settings.aboutSettings.featuresDescription')}</p>
          <ul className="list-disc list-inside space-y-1">
            <li>{t('settings.aboutSettings.featureRoute')}</li>
            <li>{t('settings.aboutSettings.featureDisplay')}</li>
            <li>{t('settings.aboutSettings.featureIntegrate')}</li>
            <li>{t('settings.aboutSettings.featureLearn')}</li>
          </ul>
          <div className="divider" />
          <p className="flex flex-wrap items-center gap-2">
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
      </div>

      <div className="card bg-base-200 shadow-xl w-full mb-6">
        <div className="card-body">
          <h2 className="card-title uppercase">{t('settings.aboutSettings.changelog')}</h2>
          <Changelog />
        </div>
      </div>

      <div className="card bg-base-200 shadow-xl w-full mb-6">
        <div className="card-body">
          <h2 className="card-title uppercase">{t('settings.aboutSettings.specialMentions')}</h2>
          <p>{t('settings.aboutSettings.specialMentionsDescription')}</p>
        </div>
      </div>

      <Credits items={CREDIT_ITEMS} />
    </div>
  );
};

export default About;
