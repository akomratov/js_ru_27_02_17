import {normalizedComments} from '../fixtures'
import { ADD_COMMENT } from '../constants'

export default (comments = normalizedComments, action) => {
    const { type, payload } = action

    switch (type) {
        case ADD_COMMENT:
            const {commentId, user, text} = payload.comment
            return comments.concat( {id: commentId, user: user, text: text } )
    }

    return comments
}