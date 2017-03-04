import React from 'react'
import Comment from './Comment'

export default (props) => {

    const commentsComp = props.map(comment => <li key={comment.id}><Comment comment={comment}/></li>)

    return (
        <ul>
            {commentsComp}
        </ul>
    )
}