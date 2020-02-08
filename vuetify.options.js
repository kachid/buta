import en from 'vuetify/es5/locale/en'
import ru from 'vuetify/es5/locale/ru'

export default function({ app }) {
  return {
    lang: {
      locales: { en, ru },
      t: (key, ...params) => app.i18n.t(key, params)
    }
  }
}
