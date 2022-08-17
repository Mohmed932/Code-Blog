import React, { useEffect } from 'react'
import './Home.css'
import { useDispatch, useSelector } from 'react-redux'
import DoorDashFavorite from '../DoorDashFavorite'
import {Newdata,deleteNewdata} from '../../redux/reducers'
import { Link } from 'react-router-dom'

const Home = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(Newdata())
    console.log(Newdata)
  },[Newdata])
  const handelDelete = (id) => {
    dispatch(deleteNewdata(id))
  }
  const {data,status} = useSelector(state=>state.getdata)
  return (
    <div className='Home'>
      {status?
       <div className='main-DoorDashFavorite'>
          <DoorDashFavorite/>
          <DoorDashFavorite/>
          <DoorDashFavorite/>
          <DoorDashFavorite/>
          <DoorDashFavorite/>
          <DoorDashFavorite/>
          <DoorDashFavorite/>
          <DoorDashFavorite/>
          <DoorDashFavorite/>
          <DoorDashFavorite/>
          <DoorDashFavorite/>
       </div>
         :(data.length>0?data.map(({id,title,description,image})=>(
        <div className='main-Home' key={id}>
           <Link to={`/home/${id}`}><img src={image} alt=''/></Link>
           <h1 className='main-title'>{title}</h1>
           <button onClick={()=>handelDelete(id)}>Delete</button>
        </div>
      )):<h1 className='NoPosts'>You have not added anything</h1>)}
    </div>
  )
}

export default Home