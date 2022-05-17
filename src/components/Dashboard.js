import React from 'react';
import Cart from './Cart';
import Home from './Home';
import Numerations from './Numerations';
import Search from './Search';
import Sort from './Sort';
import '/Users/zjafri/Desktop/HUE_React/finalassignment/src/css/Dashboard.css';

function Dashboard() {
  return (
    <div>
      <div style={{padding:"10px"}}>
        <div className="headline">Discover Latest Courses on React</div>
      </div>

      <div className="SortSearchContainer">
        <div class="sort-search-item" style={{textAlign: "left"}}>All Courses</div>
        <div class="sort-search-item" ><Sort /></div>
        <div class="sort-search-item" style={{paddingLeft: "0px", paddingRight: "0px"}}><Search /></div>
      </div>

      <div className="GridContainer">
        <div class="grid--item"><Home /></div>
        <div class="grid-item"><Cart /></div>
      </div>

      <div>
        <Numerations/>
      </div>
    </div>

  )
}

export default Dashboard