import {SET_ARTICLES_FILTER} from '../constants'

export default (state = [], action) => {

    const { type, payload } = action

    switch (type) {
        case SET_ARTICLES_FILTER:
            console.log('reducer-articlesFilter.js: payload.selected = ', payload.selected)
            return payload.selected
    }

    return state
}