import React from 'react';
import SearchIcon from "@material-ui/icons/Search";
import  { Redirect,Link, useHistory } from 'react-router-dom'
import "./SearchBar.css"

function SearchBar() {
  return (
    <div className="searchbar">
    <label htmlFor="searchbar">
      <SearchIcon />
    </label>
    <input id="searchbar" placeholder="Search" onKey/>
  </div>
  )
}
export default SearchBar;
{/* <div className="searchbar">
<label htmlFor="searchbar">
  <SearchIcon />
</label>
<input id="searchbar" placeholder="Search" onKeyPress={this.submitComments}/>
</div> */}
