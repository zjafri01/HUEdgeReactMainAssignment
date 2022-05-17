import React from 'react'
import searchIcon from '../assets/search.png'
import '../css/Search.css'

function Search() {
  return (
    <div className="search">
        <input className="searchInput" type={"text"} placeholder="Search here"></input>
        <button className="searchButton" type="submit"><img className="searchImage" src={searchIcon} alt="Arrow Icon"/></button>
    </div>
  )
}

export default Search