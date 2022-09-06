import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AuthRoutes from '../auth/routes/AuthRoutes'
import JournalPage from '../journal/pages/JournalPage'
import JournalRoutes from '../journal/routes/JournalRoutes'
import JournalApp from '../JournalApp'

const AppRouter = () => {
  return (
    <Routes>

        <Route path="/auth/*" element={<AuthRoutes/>}/>

        <Route path="/*" element={<JournalPage/>}/>

    </Routes>
  )
}

export default AppRouter