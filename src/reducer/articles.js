import {articles} from '../fixtures'
import {DELETE_ARTICLE, SET_ARTICLES_FILTER, SET_DATE_FILTER} from '../constants'

export default (state = articles, action) => {

    const { type, payload } = action

    switch (type) {
        case DELETE_ARTICLE:
            return state.filter(article => article.id !== payload.id)

    }

    return state
}