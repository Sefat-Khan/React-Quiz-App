import Illustration from "../Illustration";
import LoginForm from "../LoginForm";

export default function Login() {

   
    return(
       <>
          <h1>Create an account</h1>
          <div className="column">
             <Illustration />
             <LoginForm />
          </div>
       </>
    );
}