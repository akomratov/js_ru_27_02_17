import React, {PropTypes, Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import Loader from '../Loader'
import CSSTransition from 'react-addons-css-transition-group'
import accrdion from '../../decorators/accordion'
import {filteredArticlesSelector} from '../../selectors/index'
import './style.css'

class ArticleList extends Component {
    static contextTypes = {
        user: PropTypes.string,
        i18n: PropTypes.object
    }

    render() {
        const {i18n} = this.context
        const {articles, error, loading, toggleOpenItem, isItemOpened, match} = this.props
        if (error) {
            return <h1>{error}</h1>
        }

        if (loading) {
            return <Loader />
        }

        const articleComponents = articles.map(article => <li key={article.id}>
            <Link to={`${match.url}/${article.id}`}>{article.title}</Link>
        </li>)

        return (
            <div>
                <h3>{i18n.USER}: {this.context.user}</h3>
                <CSSTransition component="ul"
                               transitionName="article-list"
                               transitionAppear={true}
                               transitionAppearTimeout={100}
                               transitionEnterTimeout={500}
                               transitionLeaveTimeout={300}
                >
                    {articleComponents}
                </CSSTransition>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        articles: filteredArticlesSelector(state),
        loading: state.articles.loading,
        error: state.articles.error
    }
}

export default connect(mapStateToProps)(accrdion(ArticleList))

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired,
    isItemOpened: PropTypes.func.isRequired,
    toggleOpenItem: PropTypes.func.isRequired
}