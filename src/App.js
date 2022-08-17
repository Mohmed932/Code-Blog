import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import NewPost from './components/NewPost/NewPost'
import Detales from './page/Detales/Detales'

const App = () => {
  return (
    <div className='App'>
       <Router>
       <Header/>
         <Routes>
            <Route path='/' element={<NewPost/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/home/:id' element={<Detales/>}/>
         </Routes>
       </Router>
    </div>
  )
}

export default App