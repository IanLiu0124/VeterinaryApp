import Button from "react-bootstrap/Button";

const Medication = ({medication, weight, removeMedBtn = (p) => p, specie}) => {

    
    return ( <tr>
        <td>{medication.name}</td>
        <td>{medication.concentration.per_unit}{medication.dosages.unit}/{medication.concentration.unit}<br></br>{medication.form}</td>
        <td><strong>{((medication.dosages[specie].unit_per_kg * weight) / medication.concentration.per_unit).toFixed(2)} {medication.concentration.unit}</strong>
            <p>({medication.dosages[specie].unit_per_kg} {medication.dosages.unit} per kg)</p></td>
        <td className='removeUnderLineLink'><Button variant='dark' onClick ={()=>removeMedBtn(medication.name)}><i className="bi bi-x-octagon"></i></Button></td>
    </tr> );
}
 
export default Medication;