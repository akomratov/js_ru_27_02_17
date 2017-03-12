import React, { Component, PropTypes } from 'react'
import Comment from './Comment'
import CommentForm from './CommentForm/index'
import toggleOpen from '../decorators/toggleOpen'


class CommentList extends Component {

    static propTypes = {
        comments: PropTypes.array
    }

    static defaultProps = {
        comments: []
    }

    componentDidUpdate() {
        this.size = this.container.getBoundingClientRect()
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
        const {comments, isOpen} = this.props
        if (!isOpen) return null

        if (!comments.length) {
            return <div>
                <h3>
                    No comments yet
                </h3>
                <CommentForm onAddComment={this.handleAddComment}/>
            </div>
        }

        const commentItems = comments.map(comment => <li key={comment.id}><Comment comment={comment} /></li>)
        return (
            <div>
                <ul>
                    {commentItems}
                </ul>
                <CommentForm onAddComment={this.handleAddComment}/>
            </div>
        )
    }

    handleAddComment(user, comment) {
        console.log('New comment:')
        console.log('    - user ' + user)
        console.log('    - comment ' + comment)
    }
}

export default toggleOpen(CommentList)