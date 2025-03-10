import { useState } from 'react'
import './App.css'
import Header from './components/header'
import {Route, Routes} from "react-router-dom"
import AboutPage from './components/aboutpage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Routes>
      <Route path= "/"element = {<AboutPage/>} />
      </Routes>
    </>
  )
}

export default App
