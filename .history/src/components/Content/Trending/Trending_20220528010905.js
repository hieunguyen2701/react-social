import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
class TrendingToday extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect : false
    }
  }
  trendingClick = () => {
    var post = this.props.id
    localStorage.setItem("post", post)
    this.setState({
        redirect: !this.state.redirect  
      })
    localStorage.setItem("date", new Date())
  }
  renderRedirect = () => {
    
    if (this.state.redirect) {
      return <Redirect to="/commentPost" />
    }
  }
  render() { 
    const url = "https://avatars.dicebear.com/api/open-peeps/"
    const dot = ".svg"
    return ( 
      <div className="trending-item hoverable"
        style={{ backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.7) 35%, transparent), url(${this.props.image_src || url + this.props.community + dot})` }}>
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