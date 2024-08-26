import Styles from './styles/Summary.module.css';
import useFetching from '../hooks/useFetching';
import { useMemo } from 'react';
export default function Summary({marks, noq}) {
    const getKeyword = useMemo(() => {
        if((marks / (noq * 5)) * 100 < 50) {
            return "Failure";
        }else if((marks / (noq * 5)) * 100 < 100) {
            return "Good";
        }else{
            return "Excellent";
        }
    }, [marks, noq]);
    const {loading, error, result} = useFetching({
        api: import.meta.env.VITE_PEXELS_API_KEY,
        getKeyword
    });


    const image = result.length > 0 ? result[0].src.medium : "";
    

    return(
       <>
    
          <div className={Styles.summary}>
             <div className={Styles.point}>
                <p className={Styles.score}>
                    Your score is<br />
                    {marks} out of {noq * 5}
                </p>
             </div>

             {loading && <div className={Styles.badge}>Loading...</div>}
            {error && <div className={Styles.badge}>There was an error</div>}

            {!loading && !error && (
             <div className={Styles.badge}>
                <img src={image} alt="success" />
             </div>)}
          </div>
       
        
       </>
    );
}