import Styles from './styles/Illustration.module.css';
import img from '../assets/images/working.png'
export default function Illustration() {
    return(
        <>
          <div className={Styles.illustration}>
           <img src={img} alt="Working" />   
          </div>
        </>
    );
}