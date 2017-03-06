import React, {Component} from 'react'

//Это можно сделать Functional Component, по возможности используй их
class Comment extends Component {

    constructor() {
        super()
        this.state = {
        }
    }

    render() {
        const {comment} = this.props
        return (
            <div>
                <p>{comment.user}</p>
                <section>{comment.text}</section>
            </div>
        )
    }

}

export default Comment
