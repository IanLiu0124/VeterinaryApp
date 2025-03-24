import { useState } from 'react';
import './App.css';
import Header from './components/header';
import {Route, Routes} from "react-router-dom";
import AboutPage from './components/aboutpage';
import NavBar from './components/navbar';
import OverView from './components/overviewpage';
import Patient from './assets/patient.json';
import AddPatient from './components/addpatient';
import AddMedication from './components/addmedication';
import PatientPage from './components/patientpage';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [patients, setPatient] = useState(Patient)
  // console.log(patients);

  const removeBtn = (id) =>
  {
    const newPatientList = patients.filter((patient) =>
    {
      return patient.id!==id
    })
    setPatient(newPatientList);
  }

  const addPatient = (name, weight, specie) =>
  {
    const newPatient =
    {
      id: uuidv4(),
      name,
      weight: parseFloat(weight),
      specie
    };
    setPatient([...patients, newPatient]);
  }

  return (
    <div className="app-background">
    <Header/>
    <NavBar/>
    <div className="container mt-5">
      {/* <div className="row">
    <AddPatient/>
    <AddMedication/>
    </div> */}
    </div>
    <Routes>
      <Route path="/addpatient" element = {<AddPatient addPatient = {addPatient}/>} />
      <Route path="/addmedication" element = {<AddMedication/>} />
      <Route path= "/"element = {<OverView patients ={patients} removeBtn = {removeBtn}/>} />
      <Route path= "/about"element = {<AboutPage/>} />
      <Route path="/patient/:id" element= {<PatientPage patients={patients}/>}/>
      </Routes>
    </div>
  )
}

export default App
