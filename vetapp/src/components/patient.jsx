import {Link} from 'react-router-dom'
const Patient = ({patient}) => {
    
    return ( 
    // <Link to={`/patient/${patient.id}`}>
    <tr>
        <td><Link to={`/patients${patient.id}`} className="removeUnderLineLink">{patient.id}</Link></td>
        <td><Link to={`/patient/${patient.id}`} className='removeUnderLineLink'>{patient.name}</Link></td>
        <td><Link to={`/patient/${patient.id}`} className='removeUnderLineLink'> {patient.specie}</Link></td>
        <td><Link to={`/patient/${patient.id}`} className='removeUnderLineLink'>{patient.weight} kg</Link></td>
        <td><Link to={`/patient/${patient.id}`} className='removeUnderLineLink'>View</Link></td>
    </tr>
    // </Link> 
);
}
 
export default Patient;