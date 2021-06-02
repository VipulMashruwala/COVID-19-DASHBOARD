import { NavLink } from 'react-router-dom'
import React from 'react'
import './MainHeader.css'

function MainHeader() {
    return (
        <header>
            <nav className="navbar">
                <ul>
                    <li> 
                        <NavLink  activeClassName="link" className="default" to="/world">World</NavLink>
                    </li>
                    <li>
                        <NavLink  activeClassName="link" className="default" to="/india">India</NavLink>
                    </li>
                </ul>
            </nav>
        </header>


    )
}

export default MainHeader
