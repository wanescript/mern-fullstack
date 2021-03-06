import React from "react"
import {useState, useEffect} from "react"
import {AiOutlineLogin} from 'react-icons/ai'
import {useSelector, useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import {login, reset} from '../features/auth/authSlice'
import Spinner from "../components/Spinner"

function Login() {
  const [formData, setFormData] = useState({
    email:'',
    password:''
  })

  const{email, password} = formData

  const navigate = useNavigate()
const dispatch = useDispatch()

const {user, isLoading, isError, isSuccess, message} = useSelector((state)=> state.auth)

useEffect (()=>{

  if (isError) {
    toast.error(message)
  }

  if(isSuccess || user) {
    navigate('/')
  }

  dispatch(reset())
}, [user, isError, isSuccess, message, navigate,dispatch])

  const onChange=(e)=> {
    setFormData((prevState)=> ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit=(e)=> {
e.preventDefault()
const userData = {
  email,
  password
}

dispatch(login(userData))

  }

  if (isLoading) {
    return<Spinner/>
  }

  return (
  <>
  <section className="heading">
    <h6>Please register if you dont have an account.</h6>
    <h1>
    <AiOutlineLogin/>Login
    </h1>
    <p>Login and start codetaking.</p>
  </section>

  <section className="form">
    {/* value is the name coming from the state */}
    <form onSubmit={onSubmit}>

      <div className="form-group">
      <input type="email" className="form-control" id="email" name="email" value={email} placeholder="Please enter your email" onChange={onChange}/>
</div>
      <div className="form-group">
      <input type="password" className="form-control" id="password" name="password" value={password} placeholder="Please enter your password" onChange={onChange}/>
</div>
     
<div className="form-group">
  <button type="submit" className="btn btn-block">Submit</button>
</div>
    </form>
  </section>
  
  </>
  
)
  }

export default Login