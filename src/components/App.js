import React, { Component, PropTypes } from 'react'
import ArticleList from './ArticleList/index'
import Chart from './Chart'
import Select from 'react-select'
import DayPicker, { DateUtils } from 'react-day-picker'
//import DateRangePicker from './DateRangePicker/index'

import moment from 'moment'

import 'react-select/dist/react-select.css'
import 'react-day-picker/lib/style.css'
//компонент становится слишком большим, пора разбивать на более мелкие
class App extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    };

    state = {
        text: '',
        selected: null,
        from: null,
        to: null
    }

    render() {
        const { articles } = this.props
        const { from, to } = this.state
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))

        return (
            <div>
                Enter your name: <input type="text" value={this.state.text} onChange={this.handleTextChange}/>
                <Select options = {options} value={this.state.selected} onChange = {this.handleSelectChange} multi/>
                <br></br>
                <DayPicker
                    numberOfMonths={ 1 }
                    initialMonth={ new Date() }
                    selectedDays={ [ from, {from, to} ] }
                    onDayClick={ this.handleDayClick } />
                <p>Selected period:
                    from <strong> { from ? moment(from).format('L') : '\'Undefined\'' } </strong> to
                    <strong> { to ? moment(to).format('L') : '\'Undefined\'' }</strong>{'  '}
                    {from || to ? <a href="." onClick={ this.handleDayResetClick }>Reset</a>: ''}
                </p>
                <br></br>
                <ArticleList articles={this.props.articles}/>
                <Chart articles={this.props.articles}/>
            </div>
        )
    }

    handleSelectChange = selected => {
        this.setState({ selected })
    }

    handleDayClick = (day, modifiers, e) => {
        const range = DateUtils.addDayToRange(day, this.state);
        this.setState(range)
    }

    handleDayResetClick = (e) => {
        e.preventDefault();
        this.setState({
            from: null,
            to: null,
        });
    }


    handleTextChange = ev => {
        if (ev.target.value.length > 10) return

        this.setState({
            text: ev.target.value
        })
    }
}

export default App
