import React, { Component } from 'react';
import * as constantClass from "../Constant/Constant"
import Post from 
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
        const Display = postArray.map(item => {
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
        return ( 
            <div>
                Hello
            </div>
         );
    }
}
 
export default CommunityPost;