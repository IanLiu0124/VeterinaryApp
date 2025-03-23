import {Link} from 'react-router-dom'

import "bootstrap-icons/font/bootstrap-icons.css";
const Patient = ({patient}) => {
    return ( 
    // <Link to={`/patient/${patient.id}`}>
    <tr>
        <td><Link to={`/patient/${patient.id}`} className="removeUnderLineLink">{patient.id}</Link></td>
        <td><Link to={`/patient/${patient.id}`} className='removeUnderLineLink'>{patient.name}</Link></td>
        <td><Link to={`/patient/${patient.id}`} className='removeUnderLineLink'> {patient.specie}</Link></td>
        <td><Link to={`/patient/${patient.id}`} className='removeUnderLineLink'>{patient.weight} kg</Link></td>
        <td><Link to={`/patient/${patient.id}`} className='removeUnderLineLink'>View</Link></td>
        <td><Link to={`/patient/${patient.id}`} className='removeUnderLineLink'><i class="bi bi-x-octagon"></i> </Link></td>
    </tr>
    // </Link> 
);
}
 
export default Patient;