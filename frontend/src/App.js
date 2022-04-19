import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import Notes from './pages/Notes';
import Home from './pages/Home';
import Header from './components/Header';
import { AiOutlineBook} from 'react-icons/ai'


function App() {
  return (
    <>
    
    
    <Router>
    <div className='container' >
    <h1><span><AiOutlineBook/></span>Codetaker</h1>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/notes-dashboard' element={<Dashboard/>}/>
    
     </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
