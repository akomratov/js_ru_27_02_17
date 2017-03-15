import React, { Component, PropTypes } from 'react'
import Article from './Article'
import Counter from './Counter'

import {connect} from 'react-redux'

class App extends Component {

    static propTypes = {
    }

    state = {
    }

    render() {

        const {articles} = this.props

        return (
            <div>
                <Counter />
                <Article article={articles[0]} />
            </div>
        )
    }
}

export default connect(state => ({
    articles: state.articles
}))(App)
