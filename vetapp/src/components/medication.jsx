const Medication = ({medication, weight}) => {
    return ( <tr>
        <td>{medication.name}</td>
        <td>{medication.description}</td>
        <td>{medication.dosages.dosage_per_kg * weight} {medication.dosages.unit}
            <p>({medication.dosages.dosage_per_kg} {medication.dosages.unit} per kg)</p></td>
    </tr> );
}
 
export default Medication;