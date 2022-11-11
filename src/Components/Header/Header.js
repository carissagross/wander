import React from 'react'
import { Link } from "react-router-dom";
import logo from '../../Images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
             <Link to='/favorites'>
                <button className='view-favorites'>VIEW FAVORITES</button>
            </Link>
            <Link to='/'>
                <img src={logo} alt="logo" className="logo" />
            </Link>
            <Link to='/'>
                <button className='view-hikes'>VIEW ALL HIKES</button>
            </Link>
        </div>
    )
}
export default Header