import React, { Component, PropTypes } from 'react'
import Article from './Article'
import Counter from './Counter'
import {articles} from '../fixtures'

class App extends Component {

    static propTypes = {
    };

    state = {
        text: '',
        count: 0
    }

    render() {
        return (
            <div>
                <Counter count={this.state.count} />
                <Article article={articles[0]} />
            </div>
        )
    }
}

export default App