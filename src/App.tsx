import { useState } from "react";
import "./App.css";
import { Category } from "./common/requests/categoriesRequest";
import { createQuiz, Question } from "./common/requests/quizRequest";
import { QuizFormPage } from "./features/quiz-form-page/QuizFormPage";
import { QuizPage } from "./features/quiz-page/QuizPage";

function App() {
  const [quizQuestions, setQuizQuestions] = useState<Question[]>([]);

  const fetchQuiz = async (
    amount: number,
    difficulty: string | undefined,
    category: Category | undefined
  ) => {
    const quizQuestions = await createQuiz(amount, difficulty, category);
    setQuizQuestions(quizQuestions);
  };

  return (
    <div className="App">
      {quizQuestions.length === 0 ? (
        <QuizFormPage onSubmit={fetchQuiz} />
      ) : (
        <QuizPage questions={quizQuestions} />
      )}
    </div>
  );
}

export default App;
