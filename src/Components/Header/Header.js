import React from 'react'
import { Link } from "react-router-dom";
import logo from '../../Images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
             <Link className='favorite-button-container' to='/favorites'>
                <button className='view-favorites'>VIEW FAVORITES</button>
            </Link>
            <Link className='logo-container' to='/'>
                <img src={logo} alt="logo" className="logo" />
            </Link>
            <Link className='hikes-button-container' to='/'>
                <button className='view-hikes'>VIEW ALL HIKES</button>
            </Link>
        </div>
    )
}
export default Header