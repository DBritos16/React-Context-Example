import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login } from '../views/Login'
import Admin from '../views/Admin'
import PrivateRoutes from './PrivateRoutes'
import PublicRoutes from './PublicRoutes'

const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<PublicRoutes/>}>
              <Route path='/login' element={<Login/>}/>
            
            </Route>


            <Route element={<PrivateRoutes/>}>
              <Route path='/admin' element={<Admin/>}/>
            </Route>


           
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter