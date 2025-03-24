import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button'

import "bootstrap-icons/font/bootstrap-icons.css";
const Patient = ({patient, removeBtn = p =>p}) => {
    return ( 
    // <Link to={`/patient/${patient.id}`}>
    <tr>
        <td><Link to={`/patient/${patient.id}`} className="removeUnderLineLink">{patient.id}</Link></td>
        <td><Link to={`/patient/${patient.id}`} className='removeUnderLineLink'>{patient.name}</Link></td>
        <td><Link to={`/patient/${patient.id}`} className='removeUnderLineLink'> {patient.specie}</Link></td>
        <td><Link to={`/patient/${patient.id}`} className='removeUnderLineLink'>{patient.weight} kg</Link></td>
        <td><Link to={`/patient/${patient.id}`} className='removeUnderLineLink'>View</Link></td>
        <td className='removeUnderLineLink'><Button variant='dark' onClick ={()=>removeBtn(patient.id)}><i class="bi bi-x-octagon"></i></Button></td>
    </tr>
    // </Link> 
);
}
 
export default Patient;