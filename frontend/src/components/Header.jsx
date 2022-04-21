import React from 'react'
import {FaUser} from 'react-icons/fa'
import {AiOutlineLogin, AiOutlineSnippets, AiOutlineBook} from 'react-icons/ai'
import {Link, useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {logout, reset} from '../features/auth/authSlice'

function Header() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {user} = useSelector((state)=> state.auth)

const onLogout = ()=> {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
}

  return (
    <header className='header'>
        <div className='logo'>
            <Link to= '/'>
                <AiOutlineBook/>Codetaker</Link>
        </div>
        <ul>
            {user ? (
            <li>
                <button className='btn' onClick={onLogout}>
                    <AiOutlineSnippets/>Logout
                    </button>
            </li>
           ) : (
           <>
                <li>
                <Link to='/login'>
                    <FaUser/>Login
                </Link>
            </li>
                <li>
                <Link to='/register'>
                    <FaUser/>Register
                </Link>
            </li>
           
                </>
                )}
        
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