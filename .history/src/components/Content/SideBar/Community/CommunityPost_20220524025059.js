import React, { Component } from 'react'
class CommunityPost extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div className="community hoverable">
              <span>{index + 1}</span>
              <ArrowDropUp />
              <img src={community.image_src} />
              <span className="name">r/{community.name}</span>
            </div>
         );
    }
}
 
export default CommunityPost;