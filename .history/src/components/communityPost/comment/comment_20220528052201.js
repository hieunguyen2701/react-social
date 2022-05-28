import React from 'react'
import "./comment.css"
function Comment(props) {
    return (
        <div className="post-comment-container">
            <h5>{props.username }</h5>
            <span>{ props.text}</span>
        </div>
    )
}
export default Comment

