const InputField = ({type, placeholder, icon, value , onChange}) => {return(
    <div className='inputForm'>
        <i className="material-symbols-rounded">{icon}</i>
        <input type={type} className="inputField" placeholder={placeholder} value={value}
                onChange={onChange}/>

    </div>
)}

export default InputField;