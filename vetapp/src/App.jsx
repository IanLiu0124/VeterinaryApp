import { useState } from 'react'
import './App.css'
import Header from './components/header'
import {Route, Routes} from "react-router-dom"
import AboutPage from './components/aboutpage'
import NavBar from './components/navbar'
import OverView from './components/overviewpage'
import Patient from './assets/patient.json'
import AddPatient from './components/addpatient'
import AddMedication from './components/addmedication'

function App() {
  const [patients, setCount] = useState(Patient)
  console.log(patients);

  return (
    <div className="app-background">
    <Header/>
    
    <NavBar/>
    <div className="container">
    <AddPatient/>
    <AddMedication/>
    </div>
    <Routes>
      <Route path= "/"element = {<OverView patients ={patients}/>} />
      <Route path= "/about"element = {<AboutPage/>} />
      </Routes>
    </div>
  )
}

export default App
