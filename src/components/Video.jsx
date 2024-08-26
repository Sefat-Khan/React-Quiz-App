/* eslint-disable react/prop-types */
import Styles from './styles/Video.module.css';
export default function Video({ title, noq, id }) {
    return(
            <>
                <div className={Styles.video}>
                    <img src={`http://img.youtube.com/vi/${id}/maxresdefault.jpg`} alt={title} />
                    <p>{title}</p>
                    <div className={Styles.qmeta}>
                        <p>{noq} Questions</p>
                        <p>Total points : {noq * 2}</p>
                    </div>
                </div>
            </>
    );
}