import {combineReducers} from 'redux'
import articleReducer from './articles'
import counterReducer from './counter'
import articlesFilter from './articlesFilter'

export default combineReducers({
    articles: articleReducer,
    count: counterReducer,
    articlesFilter: articlesFilter
})