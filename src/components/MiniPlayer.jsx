import Styles from './styles/MiniPlayer.module.css';
import { useRef, useState } from 'react';
import ReactPlayer from 'react-player';
export default function MiniPlayer({title, id}) {
  const playerRef = useRef();
  const [playerShow, setPlayerShow] = useState(false);
  const videoUrl = `https://www.youtube.com/watch?v=${id}`

  function videoPlayer() {
     if(!playerShow) {
         playerRef.current.classList.remove(Styles.floatingBtn);
         setPlayerShow(true);
     }else{
      playerRef.current.classList.add(Styles.floatingBtn);
      setPlayerShow(false);
     }
    
    }
    return(
        <>
          <div className={`${Styles.miniPlayer} ${Styles.floatingBtn}`} 
               ref={playerRef}
               onClick={videoPlayer}
               >
                <span className={`${"fa-solid fa-circle-play"} ${Styles.open}`}>
                    
                </span>
                <span className={`${"fa-solid fa-circle-xmark"} ${Styles.close}`}>
                    
                </span>
                {playerShow && (
                     <ReactPlayer 
                     className={Styles.player}
                     url={videoUrl}
                     width="300px"
                     height="168px"
                     playing={playerShow}
                     controls />
                )}
                
                <p>{title}</p>
          </div>

        </>
    );
}