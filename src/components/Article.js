import React, {Component} from 'react'
import CommentList from './CommentList'

class Article extends Component {

    constructor() {
        super()
        this.setCommentsOpenState = this.setCommentsOpenState.bind(this)
        this.state = {
            isOpen: false,
            isCommentsOpen: false
        }
    }

    render() {
        const {article} = this.props
        const {isOpen} = this.state
        const {isCommentsOpen} = this.state

        const body = isOpen ? <section>{article.text}</section> : null

        const comments = isOpen ? <CommentList setCommentsOpenState={this.setCommentsOpenState} isCommentsOpen={this.state.isCommentsOpen} comments={article.comments}></CommentList> : null
        return (
            <div>
                <h3 onClick={this.handleClick}>{article.title}</h3>
                {body}
                {comments}
            </div>
        )
    }

    handleClick = (ev) => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    setCommentsOpenState(open) {
        console.log('Articel.setCommentOpenState( ' + open + ' )')
        this.setState({
            isCommentsOpen: open
        })
    }
}

export default Article