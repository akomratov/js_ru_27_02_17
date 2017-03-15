import {SET_ARTICLES_FILTER} from '../constants'

//не дроби редюсеры слишком сильно: объедини селект и календарь в один
export default (state = [], action) => {

    const { type, payload } = action

    switch (type) {
        case SET_ARTICLES_FILTER:
            console.log('reducer-articlesFilter.js: payload.selected = ', payload.selected)
            //здесь лучше просто id хранить, а не все что в Select приходит
            return payload.selected
    }

    return state
}
