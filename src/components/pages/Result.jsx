import Summary from "../Summary";
import Analysis from '../Analysis';
import useAnswerList from '../../hooks/useAnswerList';
import { useLocation, useParams } from 'react-router-dom';
import _ from 'lodash';
export default function Result() {

  const { id } = useParams();
  const location = useLocation();
  const { state } = location;
  const { qna } = state;

  const { loading, error, answers } = useAnswerList(id);


  function calculate() {
    let score = 0;

    answers.forEach((question, index1) => {
        let correctIndexes = [];
        let  checkedIndexes = [];

        question.options.forEach((option, index2) => {
            if (option.correct) correctIndexes.push(index2);
            if (qna[index1].options[index2].checked) {
               checkedIndexes.push(index2);
               option.checked = true;
            }
        });

        if (_.isEqual(correctIndexes, checkedIndexes)) {
           score += 5;
        }
    });

    return score;
  }

  const userScore = calculate();

    return(
      <>
        {loading && <div>Loading...</div>}
        {error && <div>There was an error</div>}

        {answers && answers.length > 0 && (
             <>
                 <Summary marks={userScore} noq={answers.length} />
                 <Analysis answers={answers} />
             </>
        )}
         
      </>
    );
}