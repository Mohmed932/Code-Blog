import {configureStore} from '@reduxjs/toolkit'
import getdata from './reducers'

const store  = configureStore({reducer:{getdata}})

export default store