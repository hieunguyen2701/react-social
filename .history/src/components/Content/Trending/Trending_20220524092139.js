import React, { Component } from 'react';
class TrendingToday extends Component {
  constructor(props) {
    super(props);
  }
  state = {  }
  render() { 
    return ( 
      <div className="trending-item hoverable" style={{ backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.7) 35%, transparent), url(${this.props.image_src})` }}>
        <div className="context">
          <span className="title">{this.props.title}</span>
          <br />
          <span className="description">{this.props.text}</span>
          <div className="subreddit">
          <img className="comment-img" src={`https://avatars.dicebear.com/api/open-peeps/${this.props.username}.svg`} /> 
            <span>r/{this.props.username}</span>
          </div>
        </div>
      </div>
     );
  }
}
 
export default TrendingToday;

{/* <div className="trending-item hoverable" style={{ backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.7) 35%, transparent), url(${item.image_src})` }}>
<div className="context">
  <span className="title">{item.title}</span>
  <br />
  <span className="description">{item.description}</span>
  <div className="subreddit">
    <img src={item.subreddit.image_src} />
    <span>r/{item.subreddit.name}</span>
  </div>
</div>
</div> */}