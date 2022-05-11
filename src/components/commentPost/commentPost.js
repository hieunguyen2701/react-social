import React, { Component } from 'react'
import { Link } from "react-router-dom"
import * as constantClass from "../Constant/Constant"
import { useLocation } from 'react-router-dom';
class CommentPost extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() {
        console.log(this.state.id)
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

// import { useLocation } from 'react-router-dom'

// export default function CommentPost() {
//     const location = useLocation()
//     const data = location.state
//     console.log(data)
// }