const AddMedication = () => {
    return ( <div className="col-sm" style={{border:"white solid 1px", padding:"1.3em 1.3em"}}>
        <h5>Add Medication</h5>
        <form>
            {/* <div className="form-row"> */}
                <div className="form-group row">   
        <label for="drugName" className="col-sm-2 col-form-label">Name: </label>
        <div class="col-sm-2 mb-4">
        <input className="form-control-sm" type="text" id="name" name="inputName"></input>
        </div>
        </div>
        <div className="col-sm-3">
        <div className="form-check">
            
            <input type="checkbox" className="form-check-input" name="canineDrug" id="canineDrug"></input>
            <label for="canineDrug" className="form-check-label">Canine</label>
            </div>
            <div className="form-check">
            <input className="form-check-input "  type="checkbox" name="felineDrug" id="felineDrug"></input>
            <label for="felineDrug" className="form-check-label">Feline</label>
            </div>
            </div>
            <div className="row mb-3">
        <label for="drugDosage">Dosage per Kg: </label>
        <input className="form-control-sm" type="number" id="weight" name="weight" placeholder="kg"></input>
        </div>
        <div className="row">
        <select className="form-control-sm" name="specie">
            <option>ml</option>
            <option>mg</option>
        </select>
        </div>
        {/* </div> */}
    </form>
    </div> );
}
 
export default AddMedication;