const AddMedication = () => {
    return ( <div className="col-sm" style={{border:"white solid 1px", padding:"1.3em 1.3em"}}>
        <h5>Add Medication</h5>
        <form className="mb-3">
            <div className="form-row align-items-left">
                <div className="col-6">   
        <label for="drugName">Name: </label>
        <input className="form-control-sm" type="text" id="name" name="inputName"></input>
        </div>
        <div className="form-check col-3">
            
            <input type="checkbox" className="form-check-input" name="canineDrug" id="canineDrug"></input>
            <label for="canineDrug" className="form-check-label">Canine</label>
            </div>
            <div className="form-check col-3">
            <input className="form-check-input"  type="checkbox" name="felineDrug" id="felineDrug"></input>
            <label for="felineDrug" className="form-check-label">Feline</label>
            </div>
            <div className="col-7">
        <label for="drugDosage">Dosage per Kg: </label>
        <input className="form-control-sm" type="number" id="weight" name="weight" placeholder="kg"></input>
        </div>
        <div className="col-4">
        <select className="form-control-sm" name="specie">
            <option>ml</option>
            <option>mg</option>
        </select>
        </div>
        </div>
    </form>
    </div> );
}
 
export default AddMedication;