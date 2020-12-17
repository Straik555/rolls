import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import i18nResourses from '../locales'

const languages = ['ru', 'ua']

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'ru',
        debug: true,
        whitelist: languages,
        interpolation: {
            escapeValue: false,
        },
        resources: i18nResourses
    });


export default i18n;