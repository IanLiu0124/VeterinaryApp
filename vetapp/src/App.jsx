import { useState } from 'react'
import './App.css'
import Header from './components/header'
import {Route, Routes} from "react-router-dom"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    </>
  )
}

export default App
