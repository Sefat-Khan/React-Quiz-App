import { Fragment } from "react";
import CheckBox from "./CheckBox";
import Styles from "./styles/Answer.module.css";
export default function Answers({ options = [], handleChange, input }) {

    const props = { options, handleChange, input };

    return(
          <div className={Styles.answers}>
               {options.map((option, index) => (
                <Fragment key={index}>
                     {input ? (
                        <CheckBox className={Styles.answer}
                                    text={option.title}
                                    value={index}
                                    checked={option.checked}
                                    onChange={(e) => handleChange(e, index)}
                    />
                     ) : (
                        <CheckBox className={`${Styles.answer} ${
                                        option.correct ? Styles.correct
                                        : option.checked ? Styles.wrong
                                        : null
                                    }`}
                                text={option.title}
                                defaultChecked={option.checked}
                                disabled
                        />
                     )}
                </Fragment>
                  
               ))}
                
                  
          </div>
          
    );
}