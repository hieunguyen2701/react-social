import React, { Component } from 'react';
import posts from "../../../Data/Post/posts.json";
import Post from "./Post"
class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postArray: [],
            dataIsLoad: false,
        }
    }
    componentDidMount() {
        fetch('http://localhost:8080/post/getAll')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    postArray: data,
                    dataIsLoad : true
                })
            })
    }
    getPost = () => {
        this.setState({postArray:posts})
    }
    render() { 
        const { dataIsLoad, postArray } = this.state
        
        if (!dataIsLoad) {
            return <div>
            <h1> Pleses wait some time.... </h1> </div> 
        }
        const Display = postArray.map(item => {
            return (
                <Post upvotes={item.upvotes} subreddit_name={item.subreddit_name} subreddit_image_src={item.subreddit_image_src} username={item.username}
                    title={item.title} comments={item.comments} description={item.description}
                    image_src={item.image_src} />
                )
        })
        return ( 
            <div className="posts-wrapper">
                { Display}
            </div>
         );
    }
}
 
export default Posts;