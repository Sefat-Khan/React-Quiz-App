import Styles from '../components/styles/Account.module.css';
import { Link } from 'react-router-dom';
import { useAuth } from '../Contexts/AuthContext';
export default function Account() {
  const { currentUser, logOut } = useAuth();
    return(
        <div className={Styles.account}>
          
            {currentUser ? (
              <>
                <span className="fa-regular fa-user" title="Account">
                
                </span>
                <span>{currentUser.displayName}</span>
                <span className='fa-solid fa-right-from-bracket'
                      onClick={logOut}></span>
             </>
            ) : (
                <>
                    <Link to="/SignUp">
                    signup
                    </Link>
                    <Link to="/Login"> 
                        Login
                    </Link>
                    {/* <span className='fa-solid fa-right-from-bracket'></span> */}
                </>
            )}
           
            
        </div>
    );
}