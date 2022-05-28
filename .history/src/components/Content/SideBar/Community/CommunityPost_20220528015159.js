import React, { Component } from 'react'
import ArrowDropUp from "@material-ui/icons/ArrowDropUp";
class CommunityPost extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div className="community hoverable top-post-today" onClick={this.hand}>
              <span>{this.props.index+1}</span>
              <ArrowDropUp />
              <span className="name">r/{this.props.name}</span>
            </div>
         );
    }
}
 
export default CommunityPost;