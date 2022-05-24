import React from 'react'
import "./comment.css"
function Comment(props) {
    return (
        <div className="post-comment-container">
            <div className="comment-header">
                <img className="comment-img" src={`https://avatars.dicebear.com/api/open-peeps/${props.username}.svg`} /> 
                <h5>{props.username }</h5>
            </div>
            <div>
            <span>{ props.text}</span>
            </div>
        </div>
    )
}
export default Comment

// Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, sequi ex natus iste sunt fugiat? Expedita quasi tenetur iste dolor enim, commodi quibusdam obcaecati eligendi hic dicta quo cumque voluptate.