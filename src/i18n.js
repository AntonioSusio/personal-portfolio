import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translation's file
import enTranslations from './locals/en/translation.json';
import itTranslations from './locals/it/translation.json';

i18n
  .use(initReactI18next) // Initialize i18next for React
  .init({
    resources: {
      en: { translation: enTranslations },
      it: { translation: itTranslations },
    },
    lng: 'en',  // Setted on EN by default
    fallbackLng: 'en',  // In case there is no traduction, use english
    interpolation: { escapeValue: false }, // React doesn't need escape for value
  });

export default i18n;
