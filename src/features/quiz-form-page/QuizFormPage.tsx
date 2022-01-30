import { useEffect, useState } from "react";
import { createQuiz, Question } from "../../common/requests/quizRequest";
import {
  Category,
  fetchCategories,
} from "../../common/requests/categoriesRequest";
import { Spinner } from "../../common/components/Spinner";
import { QuizForm } from "./QuizForm";

export const QuizFormPage = () => {
  const [quizQuestions, setQuizQuestions] = useState<Question[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchCategories().then((categoryResponse) => {
      setCategories(categoryResponse);
      setIsLoading(false);
    });
  }, []);

  const onSubmit = async (
    amount: number,
    difficulty: string | undefined,
    category: Category | undefined
  ) => {
    const quizQuestions = await createQuiz(amount, difficulty, category);
    setQuizQuestions(quizQuestions);
  };

  return (
    <div>
      <h1>Quiz form</h1>
      {isLoading ? (
        <Spinner />
      ) : (
        <QuizForm categories={categories} submit={onSubmit} />
      )}
    </div>
  );
};
