import {combineReducers} from 'redux'
import articleReducer from './articles'
import counterReducer from './counter'
import articlesFilter from './articlesFilter'
import dateFilter from './dateFilter'

export default combineReducers({
    articles: articleReducer,
    count: counterReducer,
    articlesFilter: articlesFilter,
    dateFilter: dateFilter
})