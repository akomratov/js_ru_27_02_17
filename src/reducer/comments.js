import {normalizedComments} from '../fixtures'
import { ADD_COMMENT, LOAD_COMMENTS_BY_ARTICLE_ID, SUCCESS, FAIL, START } from '../constants'
import {arrToMap} from './utils'
import {Record,Map} from 'immutable'

const CommentListModel = Record({
    comments: []
})

const DefaultReducerState = Record({
    entities: new Map({}),
    error: null,
    loading: false
})

export default (state = new DefaultReducerState(), action) => {
    const { type, payload, response, error, randomId } = action

    switch (type) {

        case ADD_COMMENT:
            return state.updateIn(['entities', payload.articleId, 'comments'], (comments) => comments.concat({ id: randomId, ...payload.comment }))

        case LOAD_COMMENTS_BY_ARTICLE_ID + FAIL:
            return state
                .set('error', error.statusText)
                .set('loading', false)

        case LOAD_COMMENTS_BY_ARTICLE_ID + START:
            return state.set('loading', true)


        case LOAD_COMMENTS_BY_ARTICLE_ID + SUCCESS:
            const resp = new CommentListModel({ comments: payload.response })
            const newState = state.setIn(['entities', payload.id], resp)
                .set('loading', false)
            return newState
    }

    return state
}


