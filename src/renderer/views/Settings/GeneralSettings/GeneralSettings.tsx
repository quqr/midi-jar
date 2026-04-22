import React from 'react';
import { useTranslation } from 'react-i18next';

import { useSettings } from 'renderer/contexts/Settings';
import { useServerState } from 'renderer/contexts/ServerState';

import { supportedLanguages } from 'locales/i18n';

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

  const getAlertClass = () => {
    if (state.error) return 'alert-error';
    if (state.started) return 'alert-success';
    return 'alert-info';
  };

  const getDotClass = () => {
    if (state.error) return 'bg-error shadow-[0_0_6px_rgba(239,68,68,0.6)]';
    if (state.started) return 'bg-success shadow-[0_0_6px_rgba(34,197,94,0.6)]';
    return 'bg-base-content/30';
  };

  return (
    <>
      <div className={`alert w-full p-4 mb-6 shadow-lg ${getAlertClass()}`}>
        <div className="flex flex-col w-full">
          <div className="flex items-center gap-2">
            <div className={`indicator ${getDotClass()}`} />
            <span className="font-semibold text-sm">{getServerStatus()}</span>
          </div>
          {state.started && !!state.addresses.length && (
            <div className="mt-2 text-sm">
              <span className="block mb-2 text-xs opacity-80">
                {t('settings.generalSettings.accessThrough')}
              </span>
              <div className="flex flex-wrap gap-2">
                {state.addresses.map((address) => {
                  const url = `http://${address}:${state.port}/`;
                  return (
                    <a
                      key={address}
                      href={url}
                      target="_blank"
                      rel="noreferrer"
                      className="badge badge-outline hover:badge-primary font-medium transition-colors duration-150"
                    >
                      {address}:{state.port}
                    </a>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 space-y-6">
        <fieldset className="fieldset bg-base-200 border-base-300 p-6">
          <legend className="fieldset-legend text-base font-semibold mb-4">
            {t('settings.generalSettings.language')}
          </legend>
          <div className="form-control w-full">
            <div className="label">
              <span className="label-text font-medium">
                {t('settings.generalSettings.language')}
              </span>
              <span className="label-text-alt text-base-content/60">
                {t('settings.generalSettings.languageHint')}
              </span>
            </div>
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

        <fieldset className="fieldset bg-base-200 border-base-300 p-6">
          <legend className="fieldset-legend text-base font-semibold mb-4">
            {t('settings.generalSettings.startup')}
          </legend>
          <div className="space-y-4">
            <div className="form-control w-full">
              <label
                htmlFor="launchAtStartup"
                className="flex items-center justify-between gap-4 py-2 cursor-pointer"
              >
                <span className="label-text font-medium">
                  {t('settings.generalSettings.launchAtStartup')}
                </span>
              </label>
              <input
                id="launchAtStartup"
                type="checkbox"
                className="toggle toggle-primary min-w-[44px] min-h-[44px]"
                checked={settings.general.launchAtStartup}
                onChange={(e) => updateSetting('general.launchAtStartup', e.target.checked)}
              />
            </div>
            <div className="divider my-0" />
            <div className="form-control w-full">
              <label
                htmlFor="startMinimized"
                className="flex items-center justify-between gap-4 py-2 cursor-pointer"
              >
                <span className="label-text font-medium">
                  {t('settings.generalSettings.startMinimized')}
                </span>
              </label>
              <input
                id="startMinimized"
                type="checkbox"
                className="toggle toggle-primary min-w-[44px] min-h-[44px]"
                checked={settings.general.startMinimized}
                onChange={(e) => updateSetting('general.startMinimized', e.target.checked)}
              />
            </div>
          </div>
        </fieldset>

        <fieldset className="fieldset bg-base-200 border-base-300 p-6">
          <legend className="fieldset-legend text-base font-semibold mb-4">
            {t('settings.generalSettings.overlayServer')}
          </legend>
          <div className="space-y-4">
            <div className="form-control w-full">
              <label
                htmlFor="enableHttpWs"
                className="flex items-center justify-between gap-4 py-2 cursor-pointer"
              >
                <span className="label-text font-medium">
                  {t('settings.generalSettings.enableHttpWs')}
                </span>
              </label>
              <input
                id="enableHttpWs"
                type="checkbox"
                className="toggle toggle-primary min-w-[44px] min-h-[44px]"
                checked={settings.server.enabled}
                onChange={(e) => enable(!!e.target.checked)}
              />
            </div>
            <div className="divider my-0" />
            <div className="form-control w-full">
              <label
                htmlFor="serverPort"
                className="flex items-center justify-between gap-4 py-2"
              >
                <span className="label-text font-medium">
                  {t('settings.generalSettings.serverPort')}
                </span>
              </label>
              <input
                id="serverPort"
                type="number"
                className="input input-bordered w-24"
                onChange={(e) => updateSetting('server.port', Number(e.target.value))}
                value={settings.server.port ?? ''}
              />
            </div>
          </div>
        </fieldset>
      </div>
    </>
  );
};

export default GeneralSettings;
