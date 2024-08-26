import Answers from "../Answers";
import ProgressBar from "../ProgressBar";
import MiniPlayer from "../MiniPlayer";
import { useParams, useNavigate } from "react-router-dom";
import useQuizData from "../../hooks/useQuizList";
import { useEffect, useReducer, useState } from "react";
import _ from 'lodash';
import {useAuth} from "../../Contexts/AuthContext";
import { getFirestore, setDoc, doc } from "firebase/firestore";

const initialState = [];

const reducer = (state, action) => {
    switch(action.type){
       case "questions":
         action.value.forEach(question => {
          question.options.forEach(option => {
            option.checked = false;
          })
         });

         return action.value;

       case "answer": 
           const questions = _.cloneDeep(state);
           questions[action.questionID].options[action.optionIndex].checked = action.value;
           return questions;
       default: 
         return state;
    }
}


export default function Quiz() {
  const { id } = useParams();
  const { questions, loading, error } = useQuizData(id);
  const [currentQuestions, setCurrentQuestions] = useState(0);
  const [qna, dispatch] = useReducer(reducer, initialState);
  const {currentUser} = useAuth();
  const navigate = useNavigate();
  const state = navigate;


   useEffect(() => {
      dispatch({
         type: "questions",
         value: questions,
      })
   }, [questions]);

   function handleAnswersChange(e, index) {
      dispatch({
         type: "answer",
         questionID: currentQuestions,
         optionIndex: index,
         value: e.target.checked,
      })
   }

   function nextQuestions() {
      if(currentQuestions + 1 < questions.length) {
         setCurrentQuestions(prevCurrent => prevCurrent + 1);
      }
   }

   function prevQuestions() {
      if(currentQuestions >= 1 && currentQuestions <= questions.length) {
         setCurrentQuestions(prevCurrent => prevCurrent - 1);
      }
   }

   const percentage = questions.length > 0 ? ((currentQuestions + 1) / questions.length) * 100 : 0;


   async function submit(){
     const {uid} = currentUser;

     const db = getFirestore();
     const resultRef = doc(db, `result/${uid}`);

     await setDoc(resultRef, {
      [id]: qna
     });

     navigate(`/Result/${id}`,
        {state: { qna }
      });
      
   }

   if (loading) return <p>Loading...</p>;
   if (error) return <p>Error loading quiz data!</p>;
   if (!qna.length) return <p>No questions available</p>;

    return(
        <>
              <h1>{qna[currentQuestions].title}</h1>
              <Answers input={true} options={qna[currentQuestions].options} handleChange={handleAnswersChange} />
              <ProgressBar next={nextQuestions} prev={prevQuestions} Progress={percentage} submit={submit} />
              <MiniPlayer title={state} id={id} />  
        </>
    );

}