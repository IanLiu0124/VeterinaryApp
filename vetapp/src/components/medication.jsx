import Button from "react-bootstrap/Button";

const Medication = ({medication, weight, removeMedBtn = (p) => p, specie}) => {

    
    return ( <tr>
        <td>{medication.name}</td>
        <td>{medication.form}<br></br>{medication.concentration}</td>
        <td><strong>{(medication.dosages[specie].dosage_per_kg * weight).toFixed(2)} {medication.dosages.unit}</strong>
            <p>({medication.dosages[specie].dosage_per_kg} {medication.dosages.unit} per kg)</p></td>
        <td className='removeUnderLineLink'><Button variant='dark' onClick ={()=>removeMedBtn(medication.name)}><i className="bi bi-x-octagon"></i></Button></td>
    </tr> );
}
 
export default Medication;