const Medication = ({medication, weight}) => {
    return ( <tr>
        <td>{medication.name}</td>
        <td>{medication.description}</td>
        <td>250mg per Tab
            {/* <p>500mg per Tab</p>
            <p>1000mg per Tab </p>
            <p>200mg per mL</p> */}
        </td>
        <td>0.5 Tablet <br></br>{medication.dosages.dosage_per_kg * weight} {medication.dosages.unit}
            <p>({medication.dosages.dosage_per_kg} {medication.dosages.unit} per kg)</p></td>
    </tr> );
}
 
export default Medication;