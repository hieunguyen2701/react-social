import React, { Component } from 'react';
import Logo from "./logo/Logo"
import SearchBar from "./searchBar/SearchBar"
import Action from "./action/Action"
import "./NavBar.css"
export default function NavBar() {
    return <div className="navbar">
        <Logo />
        <SearchBar />
        <Action />
    </div>
}