import React, { Component } from 'react';
import * as constantClass from "../Constant/Constant"
import Post from "./posts/Post"
import "./posts/Posts.css"
class CommunityPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postArray: [],
            dataIsLoad: false,
            community : localStorage.getItem('community')
        }
    }
    componentDidMount() {
        fetch(constantClass.localhost+"/post/getAllByCom?community="+ this.state.community)
        .then(res => res.json())
        .then(data => {
            this.setState({
                postArray: data,
                dataIsLoad : true
            })
        })
    }
    render() { 
        const { dataIsLoad, postArray } = this.state
        
        if (!dataIsLoad) {
            return <div>
            <h1> Pleses wait some time.... </h1> </div> 
        }
        if (postArray.length == 0) {
            let Display = () => {
                
                return <div>no post</div>
            }
        }
        else {     
            let Display = postArray.map(item => {
                return (
                    <Post
                        id={item.id}
                        upvotes={item.upvotes}
                        subreddit_image_src={null}
                        community={item.community}
                        username={item.username}
                        title={item.title}
                        text={item.text}
                        image_src={item.image_src}
                        comments={item.comments}
                    />
                    )
            })
        }
        return ( 
            <div>
                 <div className="content">
                    <div className="bars-wrapper">
                    <div className="bars-wrapper-inside">
                    <div className="posts-wrapper" >                             
                        {Display}
                    </div>
                    </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default CommunityPost;