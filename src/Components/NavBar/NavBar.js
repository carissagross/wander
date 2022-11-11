import React from 'react'
import { Link } from "react-router-dom";
import './NavBar.css'

const NavBar = () => {
    return (
        <div className='nav-container'>
            <Link to='/'>
                <button className='home-button'>ALL HIKES</button>
            </Link>
            {/* <Link to='/favorites'>
                <button className='view-favorites'>VIEW FAVORITES</button>
            </Link> */}
        </div>
    )
}
export default NavBar