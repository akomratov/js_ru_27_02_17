import {articles} from '../fixtures'
import {DELETE_ARTICLE} from '../constants'

export default (state = articles, action) => {
    const { type, payload } = action

    switch (type) {
        case DELETE_ARTICLE:
            return state.filter(article => article.id !== payload.id)

    }

    return articles
}