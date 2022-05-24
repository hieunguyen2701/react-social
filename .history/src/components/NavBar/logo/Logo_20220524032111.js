import React, { Component } from 'react';
import { Link } from "react-router-dom"
import "./Logo.css"
export default function Logo() {
    return (
        <Link to="/" className="logo hoverable">
            <img src={`https://avatars.dicebear.com/api/open-peeps/${this.props.username}.svg`} />    
            <span>Reddit</span>
        </Link>
    )
}