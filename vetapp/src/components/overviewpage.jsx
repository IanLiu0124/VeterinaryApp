import Table from 'react-bootstrap/Table';

const OverViewPage = () => {
    return (
        <div style={{ margin: "3em" }}>
            <h4>Patient List</h4>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Species</th>
                        <th>Weight</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
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