import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../component/Home/Home'
function routers() {
  return (
    <Routes>
        <Route path='/' element = {<Home />} />
    </Routes>
  )
}

export default routers