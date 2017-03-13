import React, { Component, PropTypes } from 'react'
import './style.css'

import Input from '../Input/index'

// CommentForm (new form)
export default class CommentForm extends Component {

    state = {
        name: '',
        nameError: '',
        comment: '',
        commentError: ''
    }

    validatableFields = []

    validationSchema = {
        name: {
            max: 10,
            required: true
        },
        comment: {
            max: 150,
            required: true
        }
    }

    static propTypes = {
        onAddComment: PropTypes.func.isRequired
    }

    render() {

        return(
            <div className="comment-form">
                <Input validationSchema={this.validationSchema} ref={this.getValidatableField} name="name" label="Name" value={this.state.name} onChange={this.onChange} error={this.state.nameError} setError={this.setError} />
                <div className="comment-input">
                    <label className="comment">Comment</label>
                    <div className="validated-input">
                        <textarea rows="4" name="comment" value={this.state.comment} onChange={this.onChange}></textarea>
                        <label className="validation-error">{this.state.commentError}</label>
                    </div>
                </div>
                <div className="comment-input">
                    <div className="form-button">
                        <button onClick={this.handleClickResetForm}>Reset form</button>
                    </div>
                    <div className="form-button">
                        <button onClick={this.handleClickAddComment}>Add comment</button>
                    </div>
                </div>
            </div>
        )
    }

    handleClickAddComment = () => {
        var nameError, commentError, error
        error = false
        const {onAddComment} = this.props
        const {name, comment} = this.state

        this.validatableFields.map((field) => {
            field.validate(this.validationSchema)
            console.log(field.props.name)
            if( this.state[field.props.name + "Error"] ) {
                error = true
            }
        })

        if( !name ) {
            nameError = 'Name is required'
        } else if( name.length > 10 ) {
            nameError = 'Name must not exceed 10 characters. Current length is ' + name.length
        }

        if( !comment ) {
            commentError = 'Comment is required'
        } else if( comment.length > 150 ) {
            commentError = 'Comment must not exceed 150 characters. Current length is ' + comment.length
        }

        if( error ) {
            console.log('ERROR OCCURED!!!')
        }

        if( nameError || commentError ) {
            console.log(nameError)
            console.log(name)
            this.setState({
                //nameError: (nameError ? nameError : ''),
                commentError: (commentError ? commentError : '')
            })
        } else {

            this.setState({
                name: '',
                comment: '',
                nameError: '',
                commentError: ''
            })
            onAddComment(name, comment)
        }
    }

    handleClickResetForm = () => {
        this.setState({
            name: '',
            comment: '',
            nameError: '',
            commentError: ''
        })
    }

    getValidatableField = ref => {
        if( ref ) {
            console.log('getValidatableField(): push input field')
            this.validatableFields.push(ref)
        }
    }

    onChange = ev => {
        const state = {}
        state[ev.target.name] = ev.target.value
        this.setState(state)
    }

    setError = (name, message) => {
        const state = {}
        state[name + "Error"] = message
        this.setState(state)
    }
}



////////////////////////////////////////////////////////////////////////////
// WORKING CODE

/*

export default class CommentForm extends Component {

    state = {
        name: '',
        nameError: '',
        comment: '',
        commentError: ''
    }

    static propTypes = {
        onAddComment: PropTypes.func.isRequired
    }

    render() {

        return(
            <div className="comment">
                <p className="comment">
                    <label className="comment">Name</label>
                    <label className="comment"></label>
                    <input className="comment" type="text" name="name" value={this.state.name} onChange={this.onChange}/>
                </p>
                <p className="comment">
                    <label className="comment"></label>
                    <label className="comment"></label>
                    <label className="commentError">{this.state.nameError}</label>
                </p>
                <p className="comment">
                    <label className="comment">Comment</label>
                    <label className="comment"></label>
                    <textarea  className="comment" rows="4" name="comment" value={this.state.comment} onChange={this.onChange}></textarea>
                </p>
                <p className="comment">
                    <label className="comment"></label>
                    <label className="comment"></label>
                    <label className="commentError">{this.state.commentError}</label>
                </p>
                <p className="comment">
                    <button className="comment" onClick={this.handleClickResetForm}>Reset form</button>
                    <label className="comment"></label>
                    <button className="comment" onClick={this.handleClickAddComment}>Add comment</button>
                </p>
            </div>
        )
    }

    handleClickAddComment = () => {
        var nameError, commentError
        const {onAddComment} = this.props
        const {name, comment} = this.state

        if( !name ) {
            nameError = 'Name is required'
        } else if( name.length > 10 ) {
            nameError = 'Name must not exceed 10 characters. Current length is ' + name.length
        }

        if( !comment ) {
            commentError = 'Comment is required'
        } else if( comment.length > 150 ) {
            commentError = 'Comment must not exceed 150 characters. Current length is ' + comment.length
        }


        if( nameError || commentError ) {
            console.log(nameError)
            console.log(name)
            this.setState({
                nameError: (nameError ? nameError : ''),
                commentError: (commentError ? commentError : '')
            })
        } else {

            this.setState({
                name: '',
                comment: '',
                nameError: '',
                commentError: ''
            })
            onAddComment(name, comment)
        }
    }

    handleClickResetForm = () => {
        this.setState({
            name: '',
            comment: '',
            nameError: '',
            commentError: ''
        })
    }

    onChange = ev => {
        const state = {}
        state[ev.target.name] = ev.target.value
        this.setState(state)
    }
}



*/