import React, { Component } from 'react';
import * as constantClass from "../../Constant/Constant"
import Comment from "./comment"
class CommentList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            commentList : []
        }
    }
    componentDidMount() {
        fetch(constantClass.localhost + "/comment/getAll?post=" + this.props.idPost)
        .then(response => response.json())
        .then(data => {
            this.setState({ commentList: data });
            console.log(data);
            console.log(this.props.idPost)
    });
    }
    render() { 
        const { commentList } = this.state;
        return ( 
            <div>
                {
                    commentList.map((item, index) => (
                        index < 10 ? <Comment
                            
                            username={item.username}
                                            text = {item.text}
                        /> : <span></span>
                    ))
                }
            </div>
        )
            
    }
}
 
export default CommentList;