import React from 'react'
import logo from '../../Images/logo.png'
import './NavBar.css'

const NavBar = () => {
    return (
        <section className='nav-bar'>
            <div className='navbar-container'>
                <img src={logo} alt="logo" className="logo" />
                <button>Saved Hikes</button>
            </div>

        </section>
    )

}


export default NavBar