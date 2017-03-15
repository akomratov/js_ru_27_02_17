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

    applyDateFilter = (articles, df) => {

        console.log('ArticleList-index.js: applyDateFilter, dateFilter = ', df, ', articles = ', articles)

        if( df.from && df.to ) {
            return articles.filter(a => {
                if( Date.parse(a.date) >= df.from && Date.parse(a.date) <= df.to ) {
                    console.log( 'article in INTERVAL ', a )
                    return true
                } else {
                    console.log( 'article NOT in INTERVAL ', a )
                    return false
                }

            })
        }

        return articles
    }


    render() {
        const {articles, articlesFilter, dateFilter, toggleOpenItem, isItemOpened} = this.props

        var selectedArticles = this.applyArticlesFilter(articles, articlesFilter)
        selectedArticles = this.applyDateFilter(selectedArticles, dateFilter)

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
        articlesFilter: state.articlesFilter,
        dateFilter: state.dateFilter
    }
}

export default connect(mapStateToProps)(accrdion(ArticleList))

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired,
    isItemOpened: PropTypes.func.isRequired,
    toggleOpenItem: PropTypes.func.isRequired
}
