import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminDash from './components/AdminDash'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<h1>Login Page</h1>}></Route>
        <Route path = "/admin-dashboard" element = {<AdminDash />}></Route>
        <Route path = "/user-dashboard" element = {<h1>User Dashboard</h1>}></Route>
        <Route path = "*" element = {<h1>404</h1>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App