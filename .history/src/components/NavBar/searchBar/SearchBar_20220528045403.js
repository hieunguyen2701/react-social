
import SearchIcon from "@material-ui/icons/Search";
import React, { Component } from 'react'
import { Redirect } from "react-router-dom";
import * as  constantClass from "../../Constant/Constant"
import "./SearchBar.css"

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect : false
    }
  }
  submitCommunity = (event) => {
    if (event.key === "Enter") { 
      if (window.location.href !== constantClass.currentLocation) {
        window.location.reload()
      }
      let community = event.currentTarget.value
      if (community != null || community != undefined) { 
        
        localStorage.setItem("community", community)
        // var communityInput = document.getElementById("searchbar").value
        this.setState({
          redirect: !this.state.redirect  
        })
        var searchBar = document.getElementById("searchbar")
        
      }
      
    }
  }
  renderRedirect = () => {
    
    if (this.state.redirect) {
      return <Redirect to="/communityPost" />
    }
  }
  render() { 
    return ( 
      
      <div className="searchbar">
        {this.renderRedirect()}
      <label htmlFor="searchbar">
        <SearchIcon />
      </label>
        <input id="searchbar"
          placeholder="Search Community"
          onKeyPress={this.submitCommunity} />
      </div>
     );
  }
}
 
export default SearchBar;






