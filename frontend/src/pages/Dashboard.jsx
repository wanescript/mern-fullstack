import React from 'react'
import{useEffect} from 'react'
import{useNavigate} from 'react-router-dom'
import{useDispatch, useSelector} from 'react-redux'
import NotesForm from '../components/NotesForm'
import Spinner from'../components/Spinner'
import {getNotes, reset} from '../features/notes/notesSlice'


function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  const {user} = useSelector((state)=>state.auth)
  const {notes, isLoading, isError, message} = useSelector((state)=>state.notes)

  
  useEffect(()=> {
    if(isError){
      console.log(message)

    }
    if(!user) {
      navigate('/login')
    }

    dispatch(getNotes())

    //Clear the dashboard after user leaves.
    return ()=>{
      dispatch(reset())
    }

  }, [user, navigate, isError, message, dispatch])
  

  //Spinner component
  if(isLoading){
    return <Spinner/>
  }

  return (
   <>
   <section className='heading'>
     <h1>Welcome {user && user.name}</h1>
     <p>Notes dashboard</p>
   </section>
   <NotesForm/>
   </>
  )
}

export default Dashboard