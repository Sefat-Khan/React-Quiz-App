
import Form from './Form';
import TextInput from "./TextInput";
import CheckBox from "./CheckBox";
import Button from "./Button";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../Contexts/AuthContext';

export default function SignUpForm() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [agree, setAgree] = useState(true);
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);

    const { signUp } = useAuth();
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        // do validation
        if (password !== confirmPassword) {
            return setError("passwords don't match!");
        }

        try {
            setError("");
            setLoading(true);
            await signUp(email, password, username);
            navigate("/");
        }catch(err){
            console.log(err);
            setLoading(false);
            setError("Failed to create an account");
        }
        
    }

    return(
       <>
             <Form style={{ height: "31.25rem" }} onSubmit={handleSubmit}>
                 <TextInput icon={'user'}
                            type='text'
                            placeholder='Enter your name'
                            
                            value={username}
                            onChange={(e) => setUsername(e.target.value)} />

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

                 <TextInput icon={'check'}
                            type='password'
                            placeholder='Confirm password'
                           
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)} />

                 <CheckBox text={'I agree to the Terms &amp; Conditions'}
                          
                           value={agree}
                           onChange={(e) => setAgree(e.target.checked)} />

                 <Button disabled={loading} type="submit">
                    <span>Submit now</span>
                 </Button>

                 {error && <p className='error'>{error}</p>}
             </Form>
       </>
    );
}
