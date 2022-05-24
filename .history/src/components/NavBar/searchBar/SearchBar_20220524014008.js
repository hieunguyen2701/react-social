import React from 'react';
import SearchIcon from "@material-ui/icons/Search";
import  { Redirect,Link, useHistory } from 'react-router-dom'
import "./SearchBar.css"

function SearchBar() {
  const [key, setKey] = useState("Enter")
  return (
    <div className="searchbar">
    <label htmlFor="searchbar">
      <SearchIcon />
    </label>
      <input id="searchbar" placeholder="Search" onKeyPress={(event)=>setKey(event.key) } />
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
