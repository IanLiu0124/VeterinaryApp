import Table from 'react-bootstrap/Table';
import Patient from './patient';

const OverViewPage = ({patients}) => {
    return (
        <div className="container mt-5">
            <h4>Patient List</h4>
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
                    {patients.map((patient) => (
                        <Patient key = {patient.id} patient={patient}/>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}
 
export default OverViewPage;