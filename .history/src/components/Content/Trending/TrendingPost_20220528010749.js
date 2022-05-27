import React, { Component } from 'react';
import * as constantClass from "../../Constant/Constant"
import TrendingToday from "./Trending"
import "./Trending.css"

class TrendingPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trendingArray: [],
            dataIsLoad : false,
        }
    }
    componentDidMount() {
        fetch(constantClass.localhost+"/post/getAll")
            .then(res => res.json())
            .then(data => {
                this.setState({
                    trendingArray: data,
                    dataIsLoad : true
                })
            })
    }
    
    render() { 
        const { dataIsLoad, trendingArray } = this.state
        if (!dataIsLoad) {
            return <div>
            <h1> Pleses wait some time.... </h1> </div> 
        }
        const Display = trendingArray.map((item, index) => {
            if (index < 4) {
                return (
                    <TrendingToday
                        key={item.id}
                        image_src={item.image_src}
                        title={item.title}
                        text={item.text}
                        subreddit_image_src={null}
                        username={item.username}
                        community={item.community}
                    />
                )
            }
            else return null
        })
        return ( 
            <div className="trending-today-section">
                <span className="title">Trending today</span>
                <div className="items">
                    {Display}
                </div>
            </div>
         );
    }
}
 
export default TrendingPost;