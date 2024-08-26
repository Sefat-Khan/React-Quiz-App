import Styles from './styles/TextInput.module.css';
export default function TextInput({ icon, ...rest }) {
    return(
        <>
          <div className={Styles.textInput}>
            <input {...rest} />
            <span className={`fa-solid fa-${icon}`}>
                
            </span>
          </div>
        </>
    );
}