import React, {PropTypes, Component} from 'react'
import {connect} from 'react-redux'
import Article from '../Article/index'
import CSSTransition from 'react-addons-css-transition-group'
import accrdion from '../../decorators/accordion'
import './style.css'

class ArticleList extends Component {

    applyArticlesFilter = (articles, articlesFilter) => {

        var result = []

        console.log('ArticleList-index.js: applyArticlesFilter, articlesFilter = ', articlesFilter)

        for(const selectedArticle of articlesFilter) {
            let res = articles.find(article => article.id === selectedArticle.value)
            if( res ) {
                result.push( res )
            }
        }

        console.log('ArticleList-index.js: applyArticlesFilter, result = ', result)

        return (result.length ? result : articles)
    }

    render() {
        const {articles, articlesFilter, toggleOpenItem, isItemOpened} = this.props

        const selectedArticles = this.applyArticlesFilter(articles, articlesFilter)

        console.log('ArticleList-index.js: render, selectedArticles = ', selectedArticles)

        const articleComponents = selectedArticles.map(article => <li key={article.id}>
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
    console.log('ArticleList-index.js: connect, state = ', state)
    return {
        articles: state.articles,
        articlesFilter: state.articlesFilter
    }
}

export default connect(mapStateToProps)(accrdion(ArticleList))

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired,
    isItemOpened: PropTypes.func.isRequired,
    toggleOpenItem: PropTypes.func.isRequired
}
