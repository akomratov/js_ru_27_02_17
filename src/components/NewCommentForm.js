import React, { Component, PropTypes } from 'react'
import {connect} from 'react-redux'
import {addComment} from '../AC'

class NewCommentForm extends Component {
    static propTypes = {
        articleId: PropTypes.string.isRequired,
        addComment: PropTypes.func.isRequired
    }

    state = {
        text: '',
        user: ''
    }


    static contextTypes = {
        user: PropTypes.string,
        i18n: PropTypes.object
    }

    handleChange = field => ev => {
        const {value} = ev.target
        if (!validators[field](value)) return

        this.setState({
            [field]: value
        })
    }

    handleSubmit = ev => {
        ev.preventDefault()
        const { articleId, addComment } = this.props
        addComment(this.state, articleId)
        this.setState({
            user: '',
            text: ''
        })
    }

    render() {
        const {i18n} = this.context
        return (
            <form onSubmit = {this.handleSubmit}>
                {i18n.COMMENT}: <input type="text" value={this.state.text} onChange = {this.handleChange('text')}/>
                {i18n.USER}: <input type="text" value={this.state.user} onChange = {this.handleChange('user')}/>
                <input type = "submit" value={i18n.SUBMIT} />
            </form>
        )
    }
}

const validators = {
    text: (text) => text.length < 150,
    user: (text) => text.length < 10
}

export default connect(null, {addComment})(NewCommentForm)