import React, {PropTypes, Component} from 'react'
import {connect} from 'react-redux'
import Article from '../Article/index'
import CSSTransition from 'react-addons-css-transition-group'
import accrdion from '../../decorators/accordion'
import './style.css'

class ArticleList extends Component {

    render() {
        const {articles, toggleOpenItem, isItemOpened} = this.props

        const articleComponents = articles.map(article => <li key={article.id}>
            <Article article={article}
                     isOpen={isItemOpened(article.id)}
                     toggleOpen={toggleOpenItem(article.id)}
            />
        </li>)

        return (
            <CSSTransition component="ul"
                           transitionName="article-list"
                           transitionAppear={true}
                           transitionAppearTimeout={100}
                           transitionEnterTimeout={500}
                           transitionLeaveTimeout={300}
            >
                {articleComponents}
            </CSSTransition>
        )
    }
}

const mapStateToProps = state => {

    const {articles, articlesFilter} = state
    const {selected, range}          = articlesFilter

    var filtered = []

    // Applying first filter by selected articles
    for( const selectedArticleId of selected ) {
        let res = articles.find(article => article.id === selectedArticleId)
        if( res ) {
            filtered.push( res )
        }
    }

    if( !filtered.length )
        filtered = articles

    // Applying second filter by Date range
    if( range.from && range.to ) {
        filtered = filtered.filter(a => Date.parse(a.date) >= range.from
                                        && Date.parse(a.date) <= range.to)
    }

    return {
        articles: filtered
    }
}


export default connect(mapStateToProps)(accrdion(ArticleList))

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired,
    isItemOpened: PropTypes.func.isRequired,
    toggleOpenItem: PropTypes.func.isRequired
}
