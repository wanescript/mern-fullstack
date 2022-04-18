import React from 'react'
import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <header className='header'>
        <div className='logo'>
            <Link to= '/'>GoalSetter</Link>
        </div>
        <ul>
        <li>
                <Link to='/register'>
                    <FaUser/>Register
                </Link>
            </li>
            <li>
                <Link to='/login'>
                    <FaSignOutAlt/>Login
                </Link>
            </li>
            <li>
                <Link to='/'>
                    <FaSignInAlt/>Goals
                </Link>
            </li>
            
            
        </ul>
    </header>
  )
}

export default Header