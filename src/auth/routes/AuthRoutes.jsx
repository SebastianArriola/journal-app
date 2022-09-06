import React from 'react'
import LoginPage from '../pages/LoginPage'
import { Navigate,Route, Routes } from 'react-router-dom'
import RegisterPage from '../pages/RegisterPage'

const AuthRoutes = () => {
  return (
    <Routes>

        <Route path="login" element={<LoginPage/>}/>
        <Route path="register" element={<RegisterPage/>}/>

       

    </Routes>
  )
}

export default AuthRoutes