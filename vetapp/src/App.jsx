import { useState } from 'react'
import './App.css'
import Header from './components/header'
import {Route, Routes} from "react-router-dom"
import AboutPage from './components/aboutpage'
import NavBar from './components/navbar'
import OverView from './components/overviewpage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <NavBar/>
    <Routes>
      <Route path= "/"element = {<OverView/>} />
      <Route path= "/about"element = {<AboutPage/>} />
      </Routes>
    </>
  )
}

export default App
