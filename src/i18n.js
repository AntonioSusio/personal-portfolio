import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importa i file di traduzione
import enTranslations from './locals/en/translation.json';
import itTranslations from './locals/it/translation.json';

i18n
  .use(initReactI18next) // Inizializza i18next per React
  .init({
    resources: {
      en: { translation: enTranslations },
      it: { translation: itTranslations },
    },
    lng: 'en',  // Impostato su inglese di default
    fallbackLng: 'en',  // In caso di traduzione mancante, usa l'inglese
    interpolation: { escapeValue: false }, // React non ha bisogno di escape dei valori
  });

export default i18n;
