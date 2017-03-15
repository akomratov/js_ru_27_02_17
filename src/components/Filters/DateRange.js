import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import 'react-day-picker/lib/style.css'

import {connect} from 'react-redux'
import {setDateFilter} from '../../AC'

class DateRange extends Component {

    handleDayClick = (day) => {
        const range = DateUtils.addDayToRange(day, this.props.dateFilter)
        this.props.dispatchSetDateFilter( range )
    }

    render() {
        const { from, to } = this.props.dateFilter;
        const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`
        return (
            <div className="date-range">
                <DayPicker
                    ref="daypicker"
                    selectedDays={ day => DateUtils.isDayInRange(day, { from, to }) }
                    onDayClick={ this.handleDayClick }
                />
                {selectedRange}
            </div>
        );
    }
}

export default connect((state)=>({
    dateFilter: state.dateFilter
}), { dispatchSetDateFilter: setDateFilter })(DateRange)