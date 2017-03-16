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
        this.props.dispatchSetArticlesFilter( [].concat(selected.map(a=>a.value)) )
    }

    render() {
        const { articles, selected } = this.props

        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))

        var filter = []
        for( const id of selected ) {
            let res = articles.find(a => a.id === id)
            if (res) {
                filter.push({label: res.title, value: id})
            }
        }

        console.log('ArticlesSelect.js: options=', options, ', selected=', selected, ', filter=', filter)

        return <Select
            options={options}
            value={filter}
            multi={true}
            onChange={this.handleChange}
        />
    }

}

export default connect((state)=>({
    articles: state.articles,
    selected: state.articlesFilter.selected
}), { dispatchSetArticlesFilter: setArticlesFilter })(SelectFilter)