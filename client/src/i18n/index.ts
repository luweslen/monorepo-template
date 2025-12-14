import { createI18n } from 'vue-i18n'
import enUS from './en-US'
import ptBR from './pt-BR'
import esES from './es-ES'

const i18n = createI18n({
  legacy: false,
  locale: 'pt-BR',
  fallbackLocale: 'en-US',
  messages: {
    'en-US': enUS,
    'pt-BR': ptBR,
    'es-ES': esES,
  },
})

export default i18n
