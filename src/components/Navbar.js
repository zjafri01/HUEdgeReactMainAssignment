import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Navbar.css'
import logo from '../assets/Hashedin.png'
import profileIcon from '../assets/user.png'
import cartIcon from '../assets/carts.png'
//import styles from '/css/Navbar.css'
//import styles from '/Users/zjafri/Desktop/HUE_React/finalassignment/src/css/Navbar.css'

function Navbar() {
    const mystyle = {
        height: "50px",
        width: "auto"
    };
    const rightLink = {
        float: "right"
    };

    return (
        <header>
            <div>
                <ul>
                    <li><img className="carIcon" src={logo} alt="logo" style={mystyle} onClick={()=>{window.open("/","_self")}}/></li>
                    {/* <li style={rightLink}><a href="/signout">Sign Out</a></li> */}
                    <li className="profileIcon"><img className="profileIcon" src={profileIcon} alt="profileIcon" style={{marginRight:"15px"}} onClick={()=>{window.open("/myprofile","_self")}}/></li>
                    <li className="profileIcon"><img className="profileIcon" src={cartIcon} alt="cartIcon" onClick={()=>{window.open("/mycart","_self")}}/></li>
                    <li style={rightLink}><a className="EachLink" href="/mywishlist">MY WISHLIST</a></li>
                    <li style={rightLink}><a className="EachLink" href="/">COURSES</a></li>
                </ul>
            </div>
        </header>

    )
}

export default Navbar