import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './en.json';
import zhCN from './zh-CN.json';

export const defaultLanguage = 'en';
export const supportedLanguages = ['en', 'zh-CN'] as const;
export type Language = (typeof supportedLanguages)[number];

const detectLanguage = (): Language => {
  if (typeof navigator !== 'undefined') {
    const lang = navigator.language;
    if (lang === 'zh-CN' || lang === 'zh-Hans' || lang === 'zh-Hans-CN' || lang === 'zh') {
      return 'zh-CN';
    }
  }
  return defaultLanguage;
};

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    'zh-CN': { translation: zhCN },
  },
  lng: detectLanguage(),
  fallbackLng: defaultLanguage,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
