import Table from 'react-bootstrap/Table';
import {useParams} from 'react-router-dom'

const PatientPage = ({patients}) => {
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
            <Table striped bordered hover className="table-dark">
                <thead>
                    <tr>
                        <th scope='col'>ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Species</th>
                        <th scope="col">Weight</th>
                        <th >Details</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
        </Table>
    </div> );
}
 
export default PatientPage;