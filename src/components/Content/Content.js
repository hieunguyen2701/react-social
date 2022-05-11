import React from "react";
import TrendingPost from "./Trending/TrendingPost"
import MainBar from "./MainBar/MainBar"
import SideBar from "./SideBar/SideBar"
import "./Content.css"

export default function Content() {
    return (
      <div className="content">
        <TrendingPost />
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