
import Form from './Form';
import TextInput from "./TextInput";
import Button from "./Button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import { useAuth } from '../Contexts/AuthContext';

export default function LoginForm() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);

    const { login } = useAuth();
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
    
        try {
            setError("");
            setLoading(true);
            await login(email, password);
            navigate("/");
        }catch(err){
            console.log(err);
            setLoading(false);
            setError("Failed to login");
        }
        
    }
   
    return(
       <>
         
             <Form style={{ height: "31.25rem" }} onSubmit={handleSubmit}>
                 <TextInput icon={'envelope'}
                            type='email'
                            placeholder='Enter your email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                 <TextInput icon={'lock'}
                            type='password'
                            placeholder='Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                 <Button disabled={loading} type="submit">
                    <span>Submit now</span>
                 </Button>
                 {error && <p className='error'>{error}</p>}
                 <span>Don't have an account?<Link to="/SignUp">SignUp</Link>instead.</span>
             </Form>
         
       </>
    );
}