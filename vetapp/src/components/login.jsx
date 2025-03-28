import { useState } from 'react';
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import InputField from './inputField';

const Login = ({setAuthentication = (p) => p}) => {
    const [user,setUser] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const hardCodedUser = 'admin';
        const hardCodedPassword = '123';

        // Check if user and password match hard-coded credentials
        if (user === hardCodedUser && password === hardCodedPassword) {
            alert("Login successful!");
            setAuthentication((prev)=>true);
        } else {
            alert("Login failed! Invalid credentials.");
        }
};

    return(<div className='loginForm'>
        <h5>LOG IN</h5><br/>       
        {/* <div className='underline'></div> */}
        <form onSubmit={handleSubmit}>
            <InputField type="text" placeholder="Email address"  value={user} 
                    onChange={(e) => setUser(e.target.value)}/>
            <InputField type="password" placeholder="Password" value={password} 
                    onChange={(e) => setPassword(e.target.value)}/>

           <Button className="login Btn" type="submit" variant="outline-light" size="lg">Log In</Button>
        </form>
    </div>);
}
export default Login;