import React, { Component } from 'react'
import { Link } from "react-router-dom"
import * as constantClass from "../Constant/Constant"
class CommentPost extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        const url = constantClass.urlLink+"/post/add"
        console.log(url)
        return ( 
            <Link to="/">
                <div>
                    hello
                </div>
            </Link>
         );
    }
}
 
export default CommentPost;