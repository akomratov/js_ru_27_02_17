import {ADD_COMMENT} from '../constants'
export default store => next => action => {

    const {type, payload} = action

    //через мидлвары будет проходить каждый экшин, они должны быть максимально общими, завязывать на конкретные экшины - плохая практика
    if(type === ADD_COMMENT) {
        //и лучше не мутировать payload, мало-ли что там станут передавать
        payload.comment.commentId = parseInt('xxxxx'.replace(/[x]/g, c => Math.random()*9|0))
    }

    next(action)
}
