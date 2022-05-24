import React, { Component } from 'react';
import SearchIcon from "@material-ui/icons/Search";
import "./SearchBar.css"

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this
  }
  render() { 
    return ( 
      <div className="searchbar">
        <label htmlFor="searchbar">
          <SearchIcon />
        </label>
        <input id="searchbar" placeholder="Search" />
      </div>
     );
  }
}
 
export default SearchBar;
  

{/* <div className="searchbar">
        <label htmlFor="searchbar">
          <SearchIcon />
        </label>
        <input id="searchbar" placeholder="Search" />
      </div> */}