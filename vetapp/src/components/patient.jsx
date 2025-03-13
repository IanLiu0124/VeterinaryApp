import {Link} from 'react-router-dom'


const Patient = ({patient}) => {
    return ( <tr>
        <td>{patient.id}</td>
        <td>{patient.name}</td>
        <td>{patient.specie}</td>
        <td>{patient.weight}</td>
        <td><Link to={`/patient/${patient.id}`}>View</Link></td>
    </tr> );
}
 
export default Patient;