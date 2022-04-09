import React from 'react'
import {Link} from 'react-router-dom'
import './Styles/Navbar.css'

const Navbar = () => {
    return (
        <div className='Navbar'>
            <div className='header-navbar'>Hotels app</div>

            <div className='links-field'>
                <Link className='link' to="/">Комнаты</Link>
                <Link className='link' to="/BookingList">Забронированные</Link>
            </div>
        </div>
    )
}

export default Navbar