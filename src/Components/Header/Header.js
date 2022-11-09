import React from 'react'
import logo from '../../Images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="logo" className="logo" />
        </div>
    )
}
export default Header