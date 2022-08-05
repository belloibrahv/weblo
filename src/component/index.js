import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from './Login'
import Register from './Register'

export default () => (
  <BrowserRouter>
    <Routes>
      <Route index path='/login' element={<Login />}/>
      <Route index path='/register' element={<Register />}/>
      {/* <AuthRoute index path='/auth' component={Auth}/> */}
    </Routes>
  </BrowserRouter>
)