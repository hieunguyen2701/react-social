import React, { Component } from 'react';
import SearchIcon from "@material-ui/icons/Search";
import "./SearchBar.css"

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchContent : "" 
    }
  }
  render() { 
    return ( 
      <div className="searchbar">
        <label htmlFor="searchbar">
          <SearchIcon />
        </label>
        <input id="searchbar" placeholder="Search" onChange={(event)=>{this.state.search=event.currentTarget.value}}/>
      </div>
     );
  }
}
 
export default SearchBar;
  

