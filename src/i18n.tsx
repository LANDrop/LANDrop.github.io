import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

import resources from '@/i18n-resources.json'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: {
      'zh-Hans': ['zh_CN'],
      'zh-CN': ['zh_CN'],
      default: ['en']
    },
    detection: {
      order: ['navigator', 'localStorage', 'cookie'],
      caches: ['localStorage', 'cookie']
    },
    debug: true,
    resources: resources,
    interpolation: {
      escapeValue: false // not needed for react as it escapes by default
    }
  })
  .then(() => {
    console.warn(i18n.language)
  })

export default i18n
