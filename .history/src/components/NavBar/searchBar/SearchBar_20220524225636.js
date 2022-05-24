
import SearchIcon from "@material-ui/icons/Search";
import React, { Component } from 'react'
import "./SearchBar.css"

class  extends Component {
  constructor(props) {
    super(props);
  }
  state = {  }
  render() { 
    return (  );
  }
}
 
export default ;


<div className="searchbar">
<label htmlFor="searchbar">
  <SearchIcon />
</label>
  <input id="searchbar" placeholder="Search"  onKeyPress={(event)=>setKey(event.key) } />
</div>



