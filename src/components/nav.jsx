import Styles from '../components/styles/Nav.module.css';
import Account from './Account';
import logo from '../assets/images/Rotech.jpg';
import { Link } from 'react-router-dom';

export default function Nav() {
    return(
        <>
            <nav className={Styles.nav}>
                <ul>
                    <li>
                        <Link to="/" className={Styles.brand}>
                            <img src={logo} alt="Rotech" />
                            <h3>
                                Tech Quiz
                            </h3>
                        </Link>
                    </li>
                </ul>
                <Account />
            </nav>
        </>
    );
}