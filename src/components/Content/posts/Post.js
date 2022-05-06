import React, { Component } from 'react';


import "./Posts.css";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ModeCommentIcon from "@material-ui/icons/ModeComment";
import ShareIcon from "@material-ui/icons/Share";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

import posts from "../../../Data/Post/posts.json";

class Post extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }
  state = {  }
  render() { 
    return ( 
      <div>               
            <div className="post">
              <div className="post-sidebar">
                <ArrowUpwardIcon className="upvote" />
                <span>{this.props.upvotes}</span>
                <ArrowDownwardIcon className="downvote" />
              </div>
              <div className="post-title">
                <img src={this.props.subreddit_image_src} />
                <span className="subreddit-name">r/{this.props.subreddit_name}</span>
                <span className="post-user">Posted by</span>
                <span className="post-user underline">u/{this.props.username}</span>
                <div className="spacer"></div>
                {/* <Button label="+ JOIN" /> */}
              </div>
              <div className="post-body">
                <span className="title">{this.props.title}</span>
                {/* {post.video_src && <Video src={post.video_src} duration={post.duration} />} */}
                {this.props.image_src && <img src={this.props.image_src} />}
                {this.props.description && <span className="description">{this.props.description}</span>}
              </div>
              <div className="post-footer">
                <div className="comments footer-action">
                  <ModeCommentIcon className="comment-icon" />
                  <span>{this.props.comments} Comments</span>
                </div>
                <div className="share footer-action">
                  <ShareIcon />
                  <span>Share</span>
                </div>
                <div className="save footer-action">
                  <BookmarkIcon />
                  <span>Save</span>
                </div>
                <MoreHorizIcon className="more-icon footer-action" />
              </div>
            </div>
      </div>
     );
  }
}
 
export default Post;