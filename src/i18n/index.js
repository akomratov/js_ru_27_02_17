import i18n from './i18n'
import i18n_ru from './i18n_ru'

export default function get_i18n(lang) {
    switch(lang) {
        case 'RU':
            return i18n_ru
        default:
            return i18n
    }
}

