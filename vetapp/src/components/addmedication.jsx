const AddMedication = () => {
    return ( <div className="col-sm" style={{border:"white solid 1px", padding:"1.3em 1.3em"}}>
        <h5>Add Medication</h5>
        <form>
            <div className="form-row align-items-left">
                <div className="col">   
        <label for="drugName">Name: </label>
        <input className="form-control-sm" type="text" id="name" name="inputName"></input>
        </div>
        <div className="col form-check">
            <label for="canineDrug" className="form-check-label">Canine</label>
            <input type="checkbox" name="canineDrug" id="canineDrug"></input>
            </div>
            <div className="col form-check">
            <label for="felineDrug" className="form-check-label">Feline</label>
            <input type="checkbox" name="felineDrug" id="felineDrug"></input>
            </div>
            <div className="col">
        <label for="drugDosage">Weight: </label>
        <input className="form-control-sm" type="number" id="weight" name="weight" placeholder="kg"></input>
        </div>
        <div className="col">
        <select className="form-control-sm" name="specie">
            <option>Feline</option>
            <option>Canine</option>
        </select>
        </div>
        </div>
    </form>
    </div> );
}
 
export default AddMedication;