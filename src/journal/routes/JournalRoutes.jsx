import React from 'react'
import { Navigate,Route, Routes } from 'react-router-dom'
import JournalApp from '../../JournalApp'
import JournalPage from '../pages/JournalPage'

const JournalRoutes = () => {
  return (
    <Routes>

        <Route path="/" element={<JournalPage/>}/>

        

    </Routes>
  )
}

export default JournalRoutes