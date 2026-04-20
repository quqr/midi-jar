import i18next from 'i18next';

import en from '../locales/en.json';
import zhCN from '../locales/zh-CN.json';

export const supportedLanguages = ['en', 'zh-CN'] as const;
export type Language = (typeof supportedLanguages)[number];

const detectLanguage = (): Language => {
  try {
    // eslint-disable-next-line global-require
    const { app } = require('electron');
    // eslint-disable-next-line global-require
    const Store = require('electron-store');
    const conf = new Store.default({ name: 'Settings' }); // eslint-disable-line new-cap
    const lang = conf.get('settings.general.language') as Language | undefined;
    if (lang && supportedLanguages.includes(lang)) {
      return lang;
    }
    const locale = app.getLocale();
    if (locale === 'zh-CN' || locale === 'zh-Hans' || locale === 'zh-Hans-CN' || locale === 'zh') {
      return 'zh-CN';
    }
  } catch {
    // fallback
  }
  return 'en';
};

i18next.init({
  resources: {
    en: { translation: en },
    'zh-CN': { translation: zhCN },
  },
  lng: detectLanguage(),
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export const changeLanguage = (lang: Language) => {
  i18next.changeLanguage(lang);
};

export default i18next;
