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
        var home = constantClass.currentLocation+"commentPost"
        localStorage.setItem("post", post)
        if (window.location.href == home) {
            window.location.reload()
        }
        else {
            this.setState({
                redirect: !this.state.redirect  
              })
        }
    }
    renderRedirect = () => {
        if (this.state.redirect) {
         return   <Redirect to="/commentPost" params="test" /> 
        }
        
      }
    render() { 
        return ( 
            <div className="community hoverable top-post-today" onClick={this.handleClick}>
                {this.renderRedirect()}
              <span>{this.props.index+1}</span>
              <ArrowDropUp />
                <span className="name">p/
                    <span className="name">
                        {this.props.name}
                    </span>
                </span>
            </div>
         );
    }
}
 
export default CommunityPost;