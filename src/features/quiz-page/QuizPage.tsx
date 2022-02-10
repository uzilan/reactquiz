import { Question } from "../../common/requests/quizRequest";
import { QuestionHandler } from "./QuestionHandler";

interface Props {
  questions: Question[];
}

export const QuizPage = ({ questions }: Props) => {
  return <QuestionHandler question={questions[0]} />;
};
