import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className='navbar'>
                <h1 className='logo'>user</h1>
                <ul className='all_list'>
                    <NavLink to={'/'}>DashBoard</NavLink>
                    <NavLink to={'/home'}>Home</NavLink>
                    <NavLink to={'/data'}>Data</NavLink>
                    <NavLink to={'/about'}>About</NavLink>
                    <NavLink to={'/registration'}>Sign In</NavLink>
                </ul>
            </div>
            <hr />
        </>
    )
}

export default Navbar
