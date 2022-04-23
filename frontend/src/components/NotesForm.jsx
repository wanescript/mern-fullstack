import React from 'react'
import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {createNotes} from '../features/notes/notesSlice'



function NotesForm() {
  //use state
  const [text, setText] = useState('')

  const dispatch = useDispatch()

  const onSubmit =(e)=> {
    e.preventDefault()
    dispatch(createNotes({text}))
    setText('')
  }

  return (
  <section className='form'>
    <form onSubmit={onSubmit}>
      <div className='form-group'>
        <label htmlFor='text'>Notes</label>
        <input type='text' name='text' id='text' value={text}
        onChange={(e)=> setText(e.target.value)}></input>
      </div>
<div className='form-group'>
  <button className='btn btn-block' type='submit'>Add note</button>
</div>
    </form>
  </section>
  )
}

export default NotesForm