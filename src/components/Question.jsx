import Styles from './styles/Question.module.css';
import Answers from './Answers';
export default function Question({ answers = [] }) {
    return(
        answers.map((answer, index) => (
            <div className={Styles.question} key={index}>
              <div className={Styles.qtitle}>
                  <span className="fa-solid fa-question">
                      
                  </span>
                  {answer.title}
              </div>
              <Answers input={false} options={answer.options} />
            </div>
        ))
          
        
    );
}