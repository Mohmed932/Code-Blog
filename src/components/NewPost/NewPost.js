import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './NewPost.css'
import {setNewdata} from '../../redux/reducers'

const NewPost = () => {
  const [image,setimage] = useState('')
  const [title,settitle] = useState('')
  const [description,setdescription] = useState('')
  const dispatch = useDispatch()
  const {status,error}  = useSelector(state=>state.getdata)
  const handelsend = () => {
    if(image !==''&&title !==''&&description !==''){
      const sendAsObj = {
        id:Date.now(),
        image,
        title,
        description
      }
      dispatch(setNewdata(sendAsObj))
    }
    setimage('')
    settitle('')
    setdescription('')
  }
  return (
    <div className='NewPost'>
      <p className={status?'title two show':'title two'}>Send Succuss</p>
      <p className={error?'title three show':'title three'}>ٍSome Thing Is Warning</p>
      <input type='text' placeholder='URl For image' onChange={(e)=>setimage(e.target.value)} value={image}/>
      <input type='text' placeholder='title' onChange={(e)=>settitle(e.target.value)} value={title}/>
      <textarea type='text' placeholder='description' onChange={(e)=>setdescription(e.target.value)} value={description}/>
      <button onClick={handelsend}>Send</button>
    </div>
  )
}

export default NewPost