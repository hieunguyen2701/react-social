import React from 'react'
import "./comment.css"
import ThumbUpIcon from "@material-ui/icons/ThumbUp"
import ShareIcon from "@material-ui/icons/Share";
import TimeAgo from 'timeago-react';
function Comment(props) {
    const time = "2022-05-27T19:25:20.971Z"
    return (
        <div className="post-comment">
            <div className="post-comment-container">
                <div className="comment-header">
                    <img className="comment-img" src={`https://avatars.dicebear.com/api/open-peeps/${props.username}.svg`} alt=""/> 
                </div>
                <div>
                    <h5 className="comment-post-username">
                        {props.username}
                    </h5>
                    <span>{ props.text}</span>
                </div>
            </div>
            <div className='comment-footer'>
                <div>
                    <ThumbUpIcon />
                    <span>Like</span>
                </div>
                <div>
                    <ShareIcon />
                    <span></span>

                </div>
                <TimeAgo datetime={time} />
            </div>
        </div>
    )
}
export default Comment

// Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, sequi ex natus iste sunt fugiat? Expedita quasi tenetur iste dolor enim, commodi quibusdam obcaecati eligendi hic dicta quo cumque voluptate.