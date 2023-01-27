import React from 'react'
import HomePage from '../Pages/HomePage/HomePage'
import CricketPage from '../Pages/CricketPage/CricketPage'
import AvengersPage from '../Pages/AvengersPage/AvengersPage'
import ITPage from '../Pages/ITPage/ITPage'
import {Routes , Route} from 'react-router-dom'

export default function Routing(){
  return(
    <Routes>
    <Route path='/' element={<HomePage/>} />
    <Route path='/cricket' element={<CricketPage/>} />
    <Route path='/avengers' element={<AvengersPage/>} />
    <Route path='/it' element={<ITPage/>} />
    </Routes>
  )
}