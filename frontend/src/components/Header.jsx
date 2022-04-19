import React from 'react'
import {FaUser} from 'react-icons/fa'
import {AiOutlineLogin, AiOutlineSnippets, AiOutlineBook} from 'react-icons/ai'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <header className='header'>
        <div className='logo'>
            <Link to= '/'>
                <AiOutlineBook/>Codetaker</Link>
        </div>
        <ul>
        <li>
                <Link to='/register'>
                    <FaUser/>Register
                </Link>
            </li>
            <li>
                <Link to='/login'>
                    <AiOutlineLogin/>Login
                    
                </Link>
            </li>
            <li>
                <Link to='/notes-dashboard'>
                    <AiOutlineSnippets/>Notes
                </Link>
            </li>
            
            
        </ul>
    </header>
  )
}

export default Header