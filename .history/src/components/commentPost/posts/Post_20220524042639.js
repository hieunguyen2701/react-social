/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';

import "./Posts.css";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ModeCommentIcon from "@material-ui/icons/ModeComment";
import ShareIcon from "@material-ui/icons/Share";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Redirect , Link} from 'react-router-dom';
import * as constantClass from "../../Constant/Constant"
import CommentList from "../comment/commentList"
import toast from 'react-hot-toast'

class Post extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state = {
      upvotesPost: this.props.upvotes,
      color: null,
      isClick: false,

    }
  }
  updatePost = (upvote,comments) => {
        let payload = {
          "id": this.props.id,
          "idUser" : JSON.parse(localStorage.getItem("users")).uid,
          "title": this.props.title,
          "text": this.props.text,
          "image_src": this.props.image_src,
          "upvotes": upvote,
          "comments": comments,
          "community": this.props.community,
          "username" : localStorage.getItem("username")
      }
      const requestOption = {
          method: "PUT",
          headers: { 'Content-Type': 'application/json' },
          body : JSON.stringify(payload),
      }
      fetch(constantClass.localhost+"/post/update", requestOption)
          .then(res => res.json())
          .then(data => {
          console.log(data)
          })
          .catch(error => {
            console.log(error)
      })
    
  }
  handleClick = () => {
    var post = this.props.id
    localStorage.setItem("post",post)
  }
  upvote = (e) => {
    e.stopPropagation();
    if (!this.state.isClick) {      
      this.setState({
        upvotesPost: this.props.upvotes + 1,
        color: "red",
        isClick: true,    
      })
      this.updatePost(this.props.upvotes+1)
    }
    else {
      this.setState({
        upvotesPost: this.props.upvotes,
        color: null,
        isClick: false,
 
      })
      this.updatePost(this.props.upvotes)
    }
 
    console.log("upvote is " + this.props.upvotes)
  }
  onClick = () => {
    var id = this.props.id
    var post = {
      "id": id,

    }
    localStorage.setItem("post",JSON.stringify(post))
  }
  submitComments = (event) => {
   
    if (event.key === "Enter") {
      const notification = toast.loading('Wait a second ....')
      let comment = event.currentTarget.value
      if (comment != null || comment != undefined) {
        let payload = {
          "id": Math.floor(Math.random()*1000000).toString(),
          "idUser": JSON.parse(localStorage.getItem("users")).uid,
          "post": this.props.id,
          "username": localStorage.getItem("username"),
          "text": comment
        }
        const requestOptions ={
          method: "POST",
          headers: { 'Content-Type': 'application/json' },
          body : JSON.stringify(payload),
      }
      fetch(constantClass.localhost+"/comment/creat",requestOptions)
                  .then(response => response.json())
                  .then(data => {
                      // this.getComments();
                    toast.success('Success', {
                        id : notification
                        });
                    this.updatePost(this.props.upvotes, this.props.comments + 1)
                    var input = document.getElementById("post-commentID")
                    input.value = ''
                    window.location.reload();
                  })
                  .catch(error =>{
                    toast.error('Whoops something went wrong !', {
                      id : notification
                    })
                  })
      }
    }
  }
  
  render() { 
    return ( 
    
      <div className="post-container" onClick={this.handleClick}>  
            
            <div className="posts">
                <div className="post-sidebar" >
                    <ArrowUpwardIcon className="upvote"
                    style={{ color:this.state.color }} onClick={this.upvote}/>
                    <span>{this.state.upvotesPost}</span>
                    <ArrowDownwardIcon className="downvote" />
                </div>
      
                <div className="post-title">
                <img src={`https://avatars.dicebear.com/api/open-peeps/${this.props.username}.svg`} />    
                  <span className="subreddit-name">r/{this.props.community}</span>
                  <span className="post-user">Posted by</span>
                  <span className="post-user underline">u/{this.props.username}</span>
                  <div className="spacer"></div>
                </div>
                <div className="post-body">
                    <span className="title">{this.props.title}</span>
                    {/* {post.video_src && <Video src={post.video_src} duration={post.duration} />} */}
                    {this.props.text && <span className="description">{this.props.text}</span>}
                    {this.props.image_src && <img src={this.props.image_src} />}
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
                <div className="post-comment" >
                  <span>Comments as {this.props.username}</span>
                  <div className="comment-input">
                    <img className='post-comment-image' src={`https://avatars.dicebear.com/api/open-peeps/${this.props.username}.svg`} />   
                    <input className="" placeholder="what are you thoughts?" text="text"  onKeyPress={this.submitComments} id="post-commentID"/>
                  </div>
                  {/* <button >Comment</button> */}
                </div>
        </div>
        <div className="post-comment-list">
          <CommentList idPost={this.props.id} />
        </div>
      </div>
     );
  }
}
 
export default Post;