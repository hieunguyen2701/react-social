import React from "react";
import TrendingToday from "./Trending/Trending"
import MainBar from "./MainBar/MainBar"
import SideBar from "./SideBar/SideBar"
import "./Content.css"

export default function Content() {
    return (
      <div className="content">
        <TrendingToday />
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