import React from 'react'
import { NavLink } from 'react-router-dom'
import "../styles/Navbar.css"

const Navbar = () => {
    return (
        <div className="navbar">     
                <NavLink to="/" className="heading">Unsplash</NavLink>
        </div>
    )
}

export default Navbar
