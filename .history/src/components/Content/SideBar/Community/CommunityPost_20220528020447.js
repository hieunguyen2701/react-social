import React, { Component } from 'react'
import ArrowDropUp from "@material-ui/icons/ArrowDropUp";
import { Redirect } from "react-router-dom";
import * as constantClass from "../../../Constant/Constant"
class CommunityPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        }
    }
    handleClick = () => {
        var post = this.props.id
        localStorage.setItem("post", post)
        this.setState({
            redirect: !this.state.redirect  
          })
    }
    renderRedirect = () => {
        var home = constantClass.localhost+"/commentPost"
        if (this.state.redirect) {
         return   window.location.href !== home ?  <Redirect to="/commentPost" params="test" /> : 


        }
       
      }
    render() { 
        return ( 
            <div className="community hoverable top-post-today" onClick={this.handleClick}>
                {this.renderRedirect()}
              <span>{this.props.index+1}</span>
              <ArrowDropUp />
              <span className="name">r/{this.props.name}</span>
            </div>
         );
    }
}
 
export default CommunityPost;