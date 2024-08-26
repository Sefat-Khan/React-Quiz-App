import { useEffect, useState } from "react";
import { getFirestore, collection, query, getDocs, orderBy, startAfter, limit } from "firebase/firestore";

export default function useVideosList(page) {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [videos, setVideos] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const [lastDoc, setLastDoc] = useState(null);

    useEffect(() => {
         async function fetchVideos(){
            // database related work
            const db = getFirestore();
            const videoRef = collection(db, "videos");
            let videoQuery = query(videoRef, orderBy("youtubeID"), limit(10));

            if(lastDoc && page !== 1) {
                videoQuery = query(videoRef, orderBy("youtubeID"), limit(10), startAfter(lastDoc))
            }

            try{
                setLoading(true);
                setError(false);
                // request firebase database
                const querySnapshot = await getDocs(videoQuery);
                setLoading(false);

                const videoList = [];

                    querySnapshot.forEach((doc) => {
                        videoList.push(doc.data());
                    });

            setVideos((prevVideos) => page === 1 ? videoList : [...prevVideos, ...videoList]);

            if (querySnapshot.size < 6) {
                setHasMore(false);
            }else{
                setLastDoc(querySnapshot.docs[querySnapshot.docs.length - 1]);
            }
                    

             
            }catch(err){
                console.log(err);
                setLoading(false);
                setError(true);
            }
            
         }

         fetchVideos();
   
    }, [page]);

    return{
        error,
        loading,
        videos,
        hasMore,
    };
}