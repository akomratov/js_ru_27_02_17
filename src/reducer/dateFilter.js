import {SET_DATE_FILTER} from '../constants'

export default (state = { from: '', to: '' }, action) => {

    const { type, payload } = action

    switch (type) {
        case SET_DATE_FILTER:
            console.log('reducer-dateFilter.js: payload.dateRange = ', payload.dateFilter)
            return payload.dateFilter
    }

    return state
}