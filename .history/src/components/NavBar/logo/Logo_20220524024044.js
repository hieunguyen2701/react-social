import React, { Component } from 'react';
import { Link } from "react-router-dom"
import "./Logo.css"
export default function Logo() {
    return (
        <Link to="/" className="logo hoverable">
            <img src="C:\Users\AnhDuc\OneDrive - ptit.edu.vn\Desktop\react-social\src\components\NavBar\logo\reddit_logo.jpg" alt="Smiley face"/>
            <span>Reddit</span>
        </Link>
    )
}