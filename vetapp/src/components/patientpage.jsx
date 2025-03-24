import Table from 'react-bootstrap/Table';
import {useParams} from 'react-router-dom';
import Stack from 'react-bootstrap/Stack';
import { useState } from 'react';
import MedList from '../assets/medication.json'

const PatientPage = ({patients}) => {
    const [medication, setMedication] = useState(MedList)
    const {id} = useParams();
    const patient = patients.find( (patient) => 
    {
        return patient.id === Number(id);
    })
    // const patient = patients.find(patient => patient.id === Number(id));
    if (!patient) {
        return <h2>Patient Not Found</h2>;
    }
    return ( <div className='container mt-5'>
        <h2>{patient.name} [ {patient.id} ]</h2>
        <div className="d-flex justify-content-center">
        <Stack direction="horizontal" gap={5}>
        <h4>{patient.specie}</h4>
        <h4>{patient.weight} kg</h4>
        </Stack>
        </div>
            {/* <Table striped bordered hover className="table-dark">
                <thead>
                    <tr>
                        <th scope='col'>ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Species</th>
                        <th scope="col">Weight</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>ID: {patient.id}</td>
                        <td>{patient.name}</td>
                        <td>{patient.specie}</td>
                        <td>{patient.weight}</td>
                        <td></td>
                    </tr>
                </tbody>
        </Table> */}
        <div className='container mt-4'>
            <h4>Medication</h4>
            <Table striped bordered hover className="table-dark">
                <tr>
                    <th scope='col1'>
                        Medication Name
                    </th>
                    <th>
                        Description
                    </th>
                    <th>
                        Dosage
                    </th>
                </tr>
                <tbody>
                </tbody>
            </Table>

        </div>
    </div> );
}
 
export default PatientPage;