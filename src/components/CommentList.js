import React, { Component, PropTypes } from 'react'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'
import NewCommentForm from './NewCommentForm'

import Loader from './Loader'

import {connect} from 'react-redux'
import {loadCommentsByArticleId} from '../AC'


class CommentList extends Component {

    static propTypes = {
        article: PropTypes.object.isRequired
    }

    componentDidUpdate() {
        this.size = this.container.getBoundingClientRect()
    }

    componentWillReceiveProps({isOpen, article, loadCommentsByArticleId}) {
        if (!this.props.isOpen && isOpen && !this.props.comments.entities.get(article.id)) loadCommentsByArticleId(article.id)
    }

    render() {
        const {isOpen, toggleOpen} = this.props
        return (
            <div ref={this.getContainerRef}>
                <a href="#" onClick={toggleOpen}>{isOpen ? 'hide' : 'show'} comments</a>
                {this.getBody()}
            </div>
        )
    }

    getContainerRef = (ref) => {
        this.container = ref
        if (ref) {
            this.size = ref.getBoundingClientRect()
        }
    }

    getBody() {
        const {article, comments, isOpen} = this.props
        if (!isOpen) return null

        const list = comments.entities.get(article.id)

        if (!list || !list.comments || !list.comments.length) {
            if(comments.loading) {

                return <div>
                    <Loader />
                    <NewCommentForm articleId={article.id} />
                </div>

            } else {

                return <div>
                    <h3>
                        No comments yet
                    </h3>
                    <NewCommentForm articleId={article.id} />
                </div>

            }
        }

        if(list && list['comments']) {

            const commentItems = list.comments.map(comment => <li key={comment.id}><Comment comment={comment}/></li>)
            return (
                <div>
                    <ul>
                        {commentItems}
                    </ul>
                    <NewCommentForm articleId={article.id}/>
                </div>
            )
        }

    }
}


const mapStateToProps = (state) => {
    return {
        comments: state.comments,
        loading: state.comments.loading,
        error: state.comments.error
    }
}

export default connect(mapStateToProps, { loadCommentsByArticleId })(toggleOpen(CommentList))
