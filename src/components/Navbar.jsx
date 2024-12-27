import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className='navbar'>
                <h1 className='logo'>user</h1>
                <ul className='all_list'>
                    <NavLink to={'/'}>Home</NavLink>
                    <NavLink to={'/data'}>Data</NavLink>
                    <NavLink to={'/about'}>About</NavLink>
                </ul>
            </div>
            <hr />
        </>
    )
}

export default Navbar
