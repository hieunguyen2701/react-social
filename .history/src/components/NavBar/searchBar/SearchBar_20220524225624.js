
import SearchIcon from "@material-ui/icons/Search";
import React, { Component } from 'react'
import "./SearchBar.css"

function SearchBar() {
  let [key, setKey] = useState("")
  let history = useHistory();
  if (key === "Enter") {
    var community = document.getElementById("searchbar").value
    localStorage.setItem("community", community)
    history.push("/communityPost")
  }
  return (
    <div className="searchbar">
    <label htmlFor="searchbar">
      <SearchIcon />
    </label>
      <input id="searchbar" placeholder="Search"  onKeyPress={(event)=>setKey(event.key) } />
  </div>
  )
}
export default SearchBar;


<div className="searchbar">
<label htmlFor="searchbar">
  <SearchIcon />
</label>
  <input id="searchbar" placeholder="Search"  onKeyPress={(event)=>setKey(event.key) } />
</div>



