import Table from 'react-bootstrap/Table';
import {useParams} from 'react-router-dom';
import Stack from 'react-bootstrap/Stack';
import { useState } from 'react';
import MedList from '../assets/medication.json';
import Medication from './medication';

const PatientPage = ({patients}) => {
    const [medications, setMedication] = useState(MedList)
    const {id} = useParams();
    const patient = patients.find( (patient) => 
    {
        return patient.id === id;
    })
    // const patient = patients.find(patient => patient.id === Number(id));
    if (!patient) {
        return <h2>Patient Not Found</h2>;
    }

    const removeMedBtn = (name) =>
        {
          const newMedList = medications.filter((med) =>
          {
            return med.name!==name
          })
          setMedication(newMedList);
        }

    return ( <div className='container mt-5'>
        <h2>{patient.name}</h2>
        <div className="d-flex justify-content-center">
        <Stack direction="horizontal" gap={5}>
        <h4>{patient.specie}</h4>
        <h4>{patient.weight} kg</h4>
        </Stack>
        </div>
        <div className='container mt-4'>
            <h4>Medication</h4>
            <Table striped bordered hover className="table-dark">
                <thead>
                <tr>
                    <th scope='col1'>
                        Medication Name
                    </th>
                    <th>
                        Form and Concentration
                    </th>
                    <th>
                        Dosage
                    </th>
                    <th>
                        Remove
                    </th>
                </tr>
                </thead>
                <tbody>
                {medications.map((med) => {
                    if (med.dosages[patient.specie]) {
                    return (
                        <Medication
                        key={med.name}
                        medication={med}
                        weight={patient.weight}
                        removeMedBtn={removeMedBtn}
                        specie={patient.specie}
                        />
                    );
                    }
                    return null;
                })}
                </tbody>
            </Table>

        </div>
    </div> );
}
 
export default PatientPage;