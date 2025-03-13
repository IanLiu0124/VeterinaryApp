import Table from 'react-bootstrap/Table';

const OverViewPage = () => {
    return (
        <div className="container mt-5">
            <h4>Patient List</h4>
            <Table striped bordered hover className="table-dark">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Species</th>
                        <th scope="col">Weight</th>
                        <th >Details</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Frappy</td>

                    </tr>
                    {/* {patients.map((patient) => (
                        <tr key={patient.id}>
                            <td>{patient.name}</td>
                            <td>{patient.species}</td>
                            <td>{patient.weight} kg</td>
                            <td>
                                <Link to={`/patient/${patient.id}`}>View</Link>
                            </td>
                        </tr>
                    ))} */}
                </tbody>
            </Table>
        </div>
    );
}
 
export default OverViewPage;