import React, {Component} from 'react'

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