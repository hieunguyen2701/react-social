import React from "react";
import TrendingPost from "./Trending/TrendingPost"
import MainBar from "./MainBar/MainBar"
import SideBar from "./SideBar/SideBar"
import "./Content.css"
import PostBox from "./PostBox/PostBox";

export default function Content() {
    return (
      <div className="content">
        <TrendingPost />
        <PostBox/>
        <div className="bars-wrapper">
          <span className="popular-posts-title">Popular posts</span>
          <div className="bars-wrapper-inside">
            <MainBar />
            <SideBar />
          </div>
        </div>
      </div>
    );
  }