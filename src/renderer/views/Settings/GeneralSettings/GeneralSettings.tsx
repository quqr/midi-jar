import React from 'react';
import classnames from 'classnames/bind';
import { useTranslation } from 'react-i18next';

import { useSettings } from 'renderer/contexts/Settings';
import { useServerState } from 'renderer/contexts/ServerState';

import { supportedLanguages } from 'locales/i18n';

import styles from './GeneralSettings.module.scss';

const cx = classnames.bind(styles);

const GeneralSettings: React.FC = () => {
  const { settings, updateSetting } = useSettings();
  const { state, enable } = useServerState();
  const { t, i18n } = useTranslation();

  const getServerStatus = () => {
    if (state.error) return t('settings.generalSettings.serverErrored', { error: state.error });
    if (state.started) return t('settings.generalSettings.serverRunning', { port: state.port });
    return t('settings.generalSettings.serverStopped');
  };

  const handleLanguageChange = (value: string) => {
    updateSetting('general.language', value);
    i18n.changeLanguage(value);
    window.app.changeLanguage(value);
  };

  return (
    <>
      <div
        className={cx('state', {
          isStarted: state.started,
          isError: !!state.error,
        })}
      >
        <div className={cx('statusIndicator')}>
          <div className={cx('dot')} />
          <span className={cx('statusText')}>{getServerStatus()}</span>
        </div>
        {state.started && !!state.addresses.length && (
          <div className={cx('serverUrlContainer')}>
            <span>{t('settings.generalSettings.accessThrough')}</span>
            <div className={cx('urlList')}>
              {state.addresses.map((address) => {
                const url = `http://${address}:${state.port}/`;
                return (
                  <a key={address} href={url} target="_blank" rel="noreferrer">
                    {address}:{state.port}
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </div>

      <div className="max-w-4xl mx-auto px-4 py-6">
        <fieldset className={`fieldset ${cx('fieldset')}`}>
          <legend className="fieldset-legend text-base font-semibold">
            {t('settings.generalSettings.language')}
          </legend>
          <div className="form-control w-full mt-3">
            <label htmlFor="language" className="block mb-1">
              <span className="label-text font-medium">
                {t('settings.generalSettings.language')}
              </span>
              <span className="label-text-alt text-base-content/60 ml-2">
                {t('settings.generalSettings.languageHint')}
              </span>
            </label>
            <select
              id="language"
              className="select select-bordered w-full"
              value={settings.general.language}
              onChange={(e) => handleLanguageChange(e.target.value)}
            >
              {supportedLanguages.map((lang) => (
                <option key={lang} value={lang}>
                  {lang === 'en' ? 'English' : '简体中文'}
                </option>
              ))}
            </select>
          </div>
        </fieldset>

        <fieldset className={`fieldset ${cx('fieldset')}`}>
          <legend className="fieldset-legend text-base font-semibold">
            {t('settings.generalSettings.startup')}
          </legend>
          <div className="space-y-4 mt-3">
            <div className="form-control w-full">
              <label
                htmlFor="launchAtStartup"
                className="flex items-center justify-between gap-4 py-1"
              >
                <span className="label-text font-medium">
                  {t('settings.generalSettings.launchAtStartup')}
                </span>
                <input
                  id="launchAtStartup"
                  type="checkbox"
                  className={`toggle ${cx('toggle')}`}
                  checked={settings.general.launchAtStartup}
                  onChange={(e) => updateSetting('general.launchAtStartup', e.target.checked)}
                />
              </label>
            </div>
            <div className="divider my-0" />
            <div className="form-control w-full">
              <label
                htmlFor="startMinimized"
                className="flex items-center justify-between gap-4 py-1"
              >
                <span className="label-text font-medium">
                  {t('settings.generalSettings.startMinimized')}
                </span>
                <input
                  id="startMinimized"
                  type="checkbox"
                  className={`toggle ${cx('toggle')}`}
                  checked={settings.general.startMinimized}
                  onChange={(e) => updateSetting('general.startMinimized', e.target.checked)}
                />
              </label>
            </div>
          </div>
        </fieldset>

        <fieldset className={`fieldset ${cx('fieldset')}`}>
          <legend className="fieldset-legend text-base font-semibold">
            {t('settings.generalSettings.overlayServer')}
          </legend>
          <div className="space-y-4 mt-3">
            <div className="form-control w-full">
              <label
                htmlFor="enableHttpWs"
                className="flex items-center justify-between gap-4 py-1"
              >
                <span className="label-text font-medium">
                  {t('settings.generalSettings.enableHttpWs')}
                </span>
                <input
                  id="enableHttpWs"
                  type="checkbox"
                  className={`toggle ${cx('toggle')}`}
                  checked={settings.server.enabled}
                  onChange={(e) => enable(!!e.target.checked)}
                />
              </label>
            </div>
            <div className="divider my-0" />
            <div className="form-control w-full">
              <label htmlFor="serverPort" className="flex items-center justify-between gap-4 py-1">
                <span className="label-text font-medium">
                  {t('settings.generalSettings.serverPort')}
                </span>
                <input
                  id="serverPort"
                  type="number"
                  className="input input-bordered w-24"
                  onChange={(e) => updateSetting('server.port', Number(e.target.value))}
                  value={settings.server.port ?? ''}
                />
              </label>
            </div>
          </div>
        </fieldset>
      </div>
    </>
  );
};

export default GeneralSettings;
