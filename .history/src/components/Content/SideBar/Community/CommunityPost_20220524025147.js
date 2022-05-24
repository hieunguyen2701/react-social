import React, { Component } from 'react'
import ArrowDropUp from "@material-ui/icons/ArrowDropUp";
class CommunityPost extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div className="community hoverable">
              <span>{this.props.index+}</span>
              <ArrowDropUp />
              <span className="name">r/{this.props.name}</span>
            </div>
         );
    }
}
 
export default CommunityPost;