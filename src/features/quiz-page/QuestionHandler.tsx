import { Question } from "../../common/requests/quizRequest";
import styles from "./QuestionHandler.module.css";
interface Props {
  question: Question;
}

export const QuestionHandler = ({ question }: Props) => {
  return (
    <div>
      <span>{question.question}</span>
      <div className={styles.answerContainer}>
        {question.answers.map((answer, index) => (
          <button className={styles.answer}>
            <span className={styles.index}>{index + 1}</span>
            <span className={styles.answerText}>{answer.answer}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
