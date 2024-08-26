import Styles from './styles/ProgressBar.module.css';
import Button from './Button';
import { useRef, useState } from 'react';

export default function ProgressBar({ next, prev,  Progress, submit }) {
    const tooltipRef = useRef();
    const [tooltip, setTooltip] = useState(false);

    function tooltipShow() {
        if(tooltip) {
            setTooltip(false);
            tooltipRef.current.style.display = 'none';
        }else{
            setTooltip(true);
            tooltipRef.current.style.left = `calc(${Progress}% - 65px)`;
            tooltipRef.current.style.display = 'block';
        }
    }
    return(
        <>
          <div className={Styles.progressBar}>
                 <Button className={Styles.backButton} onClick={prev}>
                    <span className="fa-solid fa-arrow-left">
                        
                    </span>
                 </Button>
                 <div className={Styles.rangeArea}>
                    <div className={Styles.tooltip} ref={tooltipRef}>
                        
                        {Progress}% complete!
                    </div>
                    <div className={Styles.rangeBody}>
                        <div className={Styles.progress} style={{ width: `${Progress}%` }} 
                             onMouseOver={tooltipShow}
                             onMouseOut={tooltipShow}>
                        </div>
                    </div>
                 </div>
              
                    <Button className={`${Styles.next}`} onClick={Progress === 100 ? submit : next}>
                        <span>{Progress === 100 ? 'Submit Quiz' : 'Next Questions' }</span>
                        <span className="fa-solid fa-arrow-right">
                           
                        </span>
                    </Button>
                 
             </div>

        </>
    );
}