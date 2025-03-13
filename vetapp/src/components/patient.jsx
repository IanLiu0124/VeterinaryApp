import {Link} from 'react-router-dom'
const Patient = ({patient}) => {
    
    return ( 
    // <Link to={`/patient/${patient.id}`}>
    <tr>
        <td><Link to={`/patients${patient.id}`} className="removeUnderLineLink">{patient.id}</Link></td>
        <td>{patient.name}</td>
        <td>{patient.specie}</td>
        <td>{patient.weight} kg</td>
        <td><Link to={`/patient/${patient.id}`} className='removeUnderLineLink'>View</Link></td>
    </tr>
    // </Link> 
);
}
 
export default Patient;