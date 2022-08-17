import React from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import './Detales.css'

const Detales = () => {
    const {data}  = useSelector(state=>state.getdata)
    const location = useLocation()
    const path = location.pathname.split('/')[2]
    const detalesData = data.find(item=>item.id.toString() === path)
    console.log(path)
  return (
    <div className='Detales'>
      <img src={detalesData.image}/>
      <div className='main-Detales'>
        <h1>{detalesData.title}</h1>
        <p>{detalesData.description}</p>
      </div>
    </div>
  )
}

export default Detales