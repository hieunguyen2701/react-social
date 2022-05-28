import React, { Component } from 'react'
import { Link } from "react-router-dom"
import * as constantClass from "../Constant/Constant"
import SideBar from "../Content/SideBar/SideBar"
import Post from "./posts/Post"
import "./posts/Posts.css"
class CommentPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: null,
            id : localStorage.getItem("post"),
            dataIsLoad : false
        }
    }
   
    componentDidMount() {
        const postId = this.state.id
        fetch(constantClass.localhost+"/post/get?id="+postId)
        .then(res => res.json())
        .then(data => {
            this.setState({
                post: data,
                dataIsLoad : true
            })
           
        })
    }
    render() {
        const { dataIsLoad, post } = this.state
        if (!dataIsLoad) {
            return <div>
            <h1> Pleses wait some time.... </h1> </div> 
        }
        return (
        <div className="content">
            <div className="bars-wrapper">
            <div className="bars-wrapper-inside">
            <div className="posts-wrapper" >
                <Post
                    id={this.state.post.id}
                    idUser={this.state.post.idUser}
                    upvotes={this.state.post.upvotes}
                    subreddit_image_src={null}
                    community={this.state.post.community}
                    username={this.state.post.username}
                    title={this.state.post.title}
                    text={this.state.post.text}
                    image_src={this.state.post.image_src}
                    comments={this.state.post.comments}
                    created_at={this.state.post.created_at}
                />
            </div>
            <SideBar />
          </div>
        </div>
      </div>
         );
    }
}
 
export default CommentPost;
