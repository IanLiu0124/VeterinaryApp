import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
const AddPatient = ({addPatient = (p)=> p}) => {
    const [name, setName] = useState("");
    const [weight, setWeight] = useState(0);
    const [specie, setSpecie] = useState("Feline");
    const navigate = useNavigate();

    const submitData = (e) =>
    {
        e.preventDefault();
        addPatient(name, weight, specie);
        setName("");
        setWeight(0);
        setSpecie("Feline");
        navigate("/");
    

    }

    return ( <div className="col-sm" style={{border:"white solid 1px", padding:"1.3em 1.3em"}}>
        <h5>Add Patient</h5>
        <form className="form" onSubmit={submitData}>
            <div className="form-row align-items-left">
                <div className="col">   
        <label htmlFor="name">Name: </label>
        <input className="form-control-sm" type="text" id="name" name="inputName" value={name} onChange={(e)=>setName(e.target.value)}></input>
        </div>
        <div className="col">
        <label htmlFor="weight">Weight: </label>
        <input className="form-control-sm" type="number" id="weight" name="weight" placeholder="kg" value={weight} onChange={(e)=>setWeight(e.target.value)}></input>
        </div>
        <div className="col">

        <select className="form-control-sm" name="specie" value={specie} onChange={(e)=>setSpecie(e.target.value)}>
            <option>Feline</option>
            <option>Canine</option>
        </select>
        </div>
        </div>
        <div className="d-grid gap-2 container mt-5">
    <Button type="submit" variant="outline-light" size="lg">Add</Button>
    </div>
    </form>
    </div> );
}
 
export default AddPatient;