import { useState } from "react";
import { Button } from "../../common/components/Button";
import { Answer, Question } from "../../common/requests/quizRequest";
import { QuestionHandler } from "./QuestionHandler";

interface Props {
  questions: Question[];
}

interface UserAnswer {
  questionText: string;
  answer: Answer;
}

export const QuizPage = ({ questions }: Props) => {
  const [answers, setAnswers] = useState<UserAnswer[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const onAnswer = (answer: Answer) => {
    setAnswers([
      ...answers,
      { questionText: questions[currentQuestionIndex].question, answer },
    ]);
  };

  const moveToNextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };
  return (
    <div>
      <QuestionHandler
        question={questions[currentQuestionIndex]}
        onClick={onAnswer}
        userAnswer={answers[currentQuestionIndex]?.answer}
      />
      <Button
        disabled={answers[currentQuestionIndex] === undefined}
        onClick={() => moveToNextQuestion()}
      >
        Next question
      </Button>
    </div>
  );
};
