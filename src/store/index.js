import {createStore, applyMiddleware} from 'redux'
import reducer from '../reducer/index'
import logger from '../middlewares/logger'
import uid from '../middlewares/uid'

const enhancer = applyMiddleware(logger, uid)

const store = createStore(reducer, {}, enhancer)

//dev only
window.store = store

export default store