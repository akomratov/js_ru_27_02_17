import React, {PropTypes, Component} from 'react'
import Article from './Article'
import Accordion from '../decorators/Accordion'


function ArticleList(props) {

    const {articles, openEntityId, toggleOpen} = props

    console.log('Decorated ArticleList.render(): openArticleId = ' + openEntityId)

    const articleComponents = articles.map(article => <li key={article.id}>
        <Article article={article}
                 isOpen={article.id === openEntityId}
                 toggleOpen={toggleOpen(article.id)}
        />
    </li>)

    return (
        <ul>
            {articleComponents}
        </ul>
    )
}

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired
}

export default Accordion(ArticleList)

///////////////////////////////////////////////////////////
// Ver. 1 (Implementation based on classes)
/*

class ArticleList extends Component {

    render() {
        const {articles, openEntityId, toggleOpen} = this.props

        console.log('Decorated ArticleList.render(): openArticleId = ' + openEntityId)

        const articleComponents = articles.map(article => <li key={article.id}>
            <Article article={article}
                     isOpen={article.id === openEntityId}
                     toggleOpen={toggleOpen(article.id)}
            />
        </li>)

        return (
            <ul>
                {articleComponents}
            </ul>
        )
    }
}

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired
}

export default Accordion(ArticleList)

*/

///////////////////////////////////////////////////////////
// Ver. 0 (Original code)

/*
export default class ArticleList extends Component {

    state = {
        openArticleId: null
    }

    render() {
        const {articles} = this.props

        const articleComponents = articles.map(article => <li key={article.id}>
            <Article article={article}
                     isOpen={article.id === this.state.openArticleId}
                     toggleOpen={this.toggleOpenArticle(article.id)}
            />
        </li>)

        return (
            <ul>
                {articleComponents}
            </ul>
        )
    }

    toggleOpenArticle = openArticleId => ev => {
        this.setState({
            openArticleId
        })
    }
}

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired
}

*/