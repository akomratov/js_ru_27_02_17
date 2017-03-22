import {ADD_COMMENT} from '../constants'
export default store => next => action => {

    const {type, payload} = action

    if(type === ADD_COMMENT) {
        payload.comment.commentId = parseInt('xxxxx'.replace(/[x]/g, c => Math.random()*9|0))
    }

    next(action)
}