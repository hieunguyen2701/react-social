import React, {Component} from "react";
import {Link} from "react-router-dom"
import "./Community.css";
import Button from "./button/Button.tsx";
import communties from "../../../../Data/communties/communities.json"
import * as constantClass from "../../../Constant/Constant"
class Community extends Component {
  constructor(props) {
    super(props);
    this.state = {
      communityArray: [],
      dataIsLoad : false
    }
  }
  componentDidMount() {
    fetch(constantClass.localhost+"/post/getAll")
    .then(res => res.json())
    .then(data => {
        this.setState({
            communityArray: data,
            dataIsLoad : true
        })
    })
  }
 
  render() { 
    const { dataIsLoad, communityArray } = this.state
    if (!dataIsLoad) {
        return <div>
        <h1> Pleses wait some time.... </h1> </div> 
    }
    const Display = trendingArray.map((item, index) => {
      if (index < 4) {
          return (
              <TrendingToday
                  image_src={item.image_src}
                  title={item.title}
                  text={item.text}
                  subreddit_image_src={null}
                  username={item.username}
              />
          )
      }
      else return null
  })
    return (
      <div className="community-section">
        <div className="title">
          <span className="hoverable">Today's Top Growing Communities</span>
        </div>
        <div className="communities-wrapper">
         
        </div>
        <div className="action-buttons">
          <Button primary label="VIEW ALL" />
          <Link to="/submitPost" className="btn-up-post">upPost</Link>
          <div className="secondary-buttons">
            <Button tertiary label="Sports" />
            <Button tertiary label="News" />
            <Button tertiary label="Gaming" />
            <Button tertiary label="Aww" />
          </div>
        </div>
      </div>
    );
  }
}
 
export default Community;