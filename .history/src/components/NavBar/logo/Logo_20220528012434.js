import React, { Component } from 'react';
import { Link } from "react-router-dom"
import "./Logo.css"
import TimeAgo from 'timeago-react';
export default function Logo() {
    var username = localStorage.getItem("username")
    return (
        <Link to="/"
            className="logo hoverable" >
            <img src={`https://avatars.dicebear.com/api/open-peeps/${username}.svg`} alt ="" />    
            <span>N19Blog</span>
        </Link>
    )
}