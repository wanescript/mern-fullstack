import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
// import Notes from './pages/Notes';
import Header from './components/Header';
import Footer from './components/Footer'
import { AiOutlineBook} from 'react-icons/ai'


function App() {
  return (
    <>
    
    
    <Router>
    <div className='container' >
    <h1><span><AiOutlineBook/></span>Codetaker</h1>
    <Header/>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        {/* <Route path='/notes-dashboard' element={<Dashboard/>}/> */}
    
     </Routes>
     <Footer/>
    </div>
    </Router>
    <ToastContainer/>
    </>
  );
}

export default App;
