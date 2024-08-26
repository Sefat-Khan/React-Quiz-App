
import { useEffect, useState } from "react";
import { createClient } from 'pexels';

export default function useFetching({ api, getKeyword }) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [result, setResult] = useState([]);
    
    
    useEffect(() => {
        const client = createClient(api);
    
                setLoading(true);
                setError(false);
                const query = getKeyword;

                client.photos.search({ query, per_page: 1 })
                    .then(res => {
                        if (res.photos && res.photos.length > 0) {
                            setResult(res.photos);
                        } else {
                            throw new Error("No photos found");
                        }
                    })
                    .catch(err => {
                        setError(true);
                        console.log("Error fetching data:", err);
                    })
                    .finally(() => {
                        setLoading(false);
                    });
                            
  
    }, [api, getKeyword]);


    return{
        loading,
        error,
        result,
    }
}