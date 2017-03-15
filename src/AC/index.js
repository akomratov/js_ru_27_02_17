import {INCREMENT, DELETE_ARTICLE, SET_ARTICLES_FILTER, SET_DATE_FILTER} from '../constants'

export function increment() {
    const action = {
        type: INCREMENT
    }

    return action
}

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: { id }
    }
}

export function setDateFilter(dateFilter) {
    return {
        type: SET_DATE_FILTER,
        payload: { dateFilter }
    }
}

export function setArticlesFilter(selected) {
    return {
        type: SET_ARTICLES_FILTER,
        payload: { selected }
    }
}