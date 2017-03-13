import React, { Component, PropTypes } from 'react'
import './style.css'

import Input from '../Input/index'
import Textarea from '../Textarea/index'


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

        const {name, comment, nameError, commentError} = this.state

        return(
            <div className="comment-form">
                <Input validationSchema={this.validationSchema} ref={this.getValidatableField} name="name" label="Name" value={name} onChange={this.onChange} error={nameError} setError={this.setError} />
                <Textarea validationSchema={this.validationSchema} ref={this.getValidatableField} name="comment" label="Comment" value={comment} onChange={this.onChange} error={commentError} setError={this.setError} />

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
        var error = false
        const {onAddComment} = this.props
        const {name, comment} = this.state

        this.validatableFields.map((field) => {
            if( !field.validate(this.validationSchema) ) {
                error = true
            }
        })

        if( !error ) {
            this.resetState()
            onAddComment(name, comment)
        }
    }

    resetState = () => {
        this.setState({
            name: '',
            comment: '',
            nameError: '',
            commentError: ''
        })
    }

    handleClickResetForm = () => {
        this.resetState()
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

