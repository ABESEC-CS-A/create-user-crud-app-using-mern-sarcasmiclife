import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ViewUser from './components/ViewUser'

const Home = () => {
  return(
  <>
    <Header/>
    <ViewUser/>
    <Footer/>
  </>
  )
}

const App = () => {
  return (
    <div>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
      </Routes>
    </div>
  )
}
export default App