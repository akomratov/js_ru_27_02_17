import React, { Component, PropTypes } from 'react'
import Select from 'react-select'

import 'react-select/dist/react-select.css'

import {connect} from 'react-redux'
import {setArticlesFilter} from '../../AC'

class SelectFilter extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    };

    handleChange = selected => {
        console.log( 'ArcticlesSelect.js: handleChange, selected=', selected )
        this.props.dispatchSetArticlesFilter( selected )
    }

    render() {
        const { articles, selected } = this.props

        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))

        console.log('ArticlesSelect.js: options=', options, ', value=', selected)

        return <Select
            options={options}
            value={selected}
            multi={true}
            onChange={this.handleChange}
        />
    }

}

export default connect((state)=>({
    articles: state.articles,
    selected: state.articlesFilter.selected
}), { dispatchSetArticlesFilter: setArticlesFilter })(SelectFilter)