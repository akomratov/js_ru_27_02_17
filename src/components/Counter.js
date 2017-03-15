import React, { Component, PropTypes } from 'react'
import {connect} from 'react-redux'
import {increment} from '../AC/index'


class Counter extends Component {
    static propTypes = {
        count: PropTypes.number
    };

    render() {
        const {count} = this.props
        return (
            <div>
                <h3>Count: {count}</h3>
                <a href="#" onClick={this.handleIncrement}>Increment me</a>
            </div>
        )
    }

    handleIncrement = (ev) => {
        ev.preventDefault()
        //this.props.dispatch(increment())
        this.props.dispatchIncrement()
    }
}

export default connect(state => ({
    count: state.count
}), { dispatchIncrement: increment })(Counter)

