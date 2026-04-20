import React from 'react';
import classnames from 'classnames/bind';
import { useTranslation } from 'react-i18next';

import { useSettings } from 'renderer/contexts/Settings';
import { useServerState } from 'renderer/contexts/ServerState';

import {
  Box,
  Container,
  FormControlLabel,
  Switch,
  Input,
  FormFieldset,
  Select,
} from '@la-jarre-a-son/ui';

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
      <Box
        className={cx('state', {
          isStarted: state.started,
          isError: !!state.error,
        })}
        pad="md"
      >
        {getServerStatus()}
        {state.started && !!state.addresses.length && (
          <div className={cx('serverUrlContainer')}>
            {t('settings.generalSettings.accessThrough')}
            {state.addresses.flatMap((address, index) => {
              const url = `http://${address}:${state.port}/`;

              return (
                <React.Fragment key={address}>
                  <a href={url} target="_blank" rel="noreferrer">
                    {address}:{state.port}
                  </a>
                  {index !== state.addresses.length - 1 && ', '}
                </React.Fragment>
              );
            })}
          </div>
        )}
      </Box>
      <Container size="md">
        <FormFieldset label={t('settings.generalSettings.language')}>
          <FormControlLabel
            label={t('settings.generalSettings.language')}
            hint={t('settings.generalSettings.languageHint')}
            reverse
          >
            <Select
              value={settings.general.language}
              onChange={handleLanguageChange}
              options={supportedLanguages.map((lang) => ({
                value: lang,
                label: lang === 'en' ? 'English' : '简体中文',
              }))}
            />
          </FormControlLabel>
        </FormFieldset>
        <FormFieldset label={t('settings.generalSettings.startup')}>
          <FormControlLabel label={t('settings.generalSettings.launchAtStartup')} reverse>
            <Switch
              checked={settings.general.launchAtStartup}
              onChange={(value) => updateSetting('general.launchAtStartup', value)}
            />
          </FormControlLabel>

          <FormControlLabel label={t('settings.generalSettings.startMinimized')} reverse>
            <Switch
              checked={settings.general.startMinimized}
              onChange={(value) => updateSetting('general.startMinimized', value)}
            />
          </FormControlLabel>
        </FormFieldset>
        <FormFieldset label={t('settings.generalSettings.overlayServer')}>
          <FormControlLabel label={t('settings.generalSettings.enableHttpWs')} reverse>
            <Switch checked={settings.server.enabled} onChange={(value) => enable(!!value)} />
          </FormControlLabel>

          <FormControlLabel label={t('settings.generalSettings.serverPort')} reverse>
            <Input
              type="number"
              onChange={(value) => updateSetting('server.port', Number(value))}
              value={settings.server.port ?? null}
              style={{ width: '64px' }}
            />
          </FormControlLabel>
        </FormFieldset>
      </Container>
    </>
  );
};

export default GeneralSettings;
