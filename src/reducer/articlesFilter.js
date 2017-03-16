import {SET_SEL_ARTICLES_FILTER, SET_DATE_FILTER} from '../constants'

//не дроби редюсеры слишком сильно: объедини селект и календарь в один
export default (state = {selected: [], range: {from:'',to:''}}, action) => {

    const { type, payload } = action
    const { selected, range } = state

    switch (type) {

        case SET_SEL_ARTICLES_FILTER:
            console.log('reducer-articlesFilter.js: payload.selected = ', payload.selected)
            //здесь лучше просто id хранить, а не все что в Select приходит
            return {
                selected: payload.selected,
                range: range
            }

        case SET_DATE_FILTER:
            console.log('reducer-articlesFilter.js: payload.range = ', payload.range)
            return {
                selected: selected,
                range: payload.range
            }
    }

    return state
}


