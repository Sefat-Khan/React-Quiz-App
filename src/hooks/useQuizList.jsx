import { useEffect, useState } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";

export default function useQuestionsList(id) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        async function fetchQuestions() {
            const db = getFirestore();
            const quizRef = doc(db, "quiz", id);

            try {
                setLoading(true);
                setError(false);
                const docSnapshot = await getDoc(quizRef);

                if (docSnapshot.exists()) {
                    const data = docSnapshot.data();
                    const questionsList = data.questions || [];
                    setQuestions(questionsList);
                   
                } else {
                    console.log("No such document!");
                }
            } catch (err) {
                console.error("Error fetching questions:", err);
                setError(true);
            } finally {
                setLoading(false);
            }
        }

        fetchQuestions();
    }, [id]);
  

    return {
        error,
        loading,
        questions,
    };
}