import React from 'react'
import Cart from './Cart'
import Home from './Home'
import Search from './Search'
import Sort from './Sort'
import '../css/Wishlist.css'

function WishList() {
  return (
    <div>
        <div style={{padding:"10px"}}>
        <div className="headline">Discover Latest Courses on React</div>
      </div>

      <div className="SortSearchContainer">
        <div class="sort-search-item-label" style={{textAlign: "left"}}>My Wishlist</div>
        <div class="sort-search-item" ><Sort /></div>
      </div>

      <div className="GridContainer">
        <div class="grid--item"><Home /></div>
        <div class="grid-item"><Cart /></div>
      </div>
    </div>
  )
}

export default WishList