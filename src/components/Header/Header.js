import React from 'react'
import './Header.css'
import {NavLink} from 'react-router-dom'

const Header = () => {
  return (
    <div className='Header'>
      <h1>C<span>o</span>d<span>e</span> B<span>lo</span>g</h1>
      <div className='main-content'>
         <NavLink to='/home'>
         <i class="fa-solid fa-house"></i>
         </NavLink>
         <NavLink to='/'>
            <i class="fa-solid fa-plus"></i>
          </NavLink>
      </div>
    </div>
  )
}

export default Header