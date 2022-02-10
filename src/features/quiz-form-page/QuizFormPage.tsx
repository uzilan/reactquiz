import { useEffect, useState } from "react";
import { createQuiz, Question } from "../../common/requests/quizRequest";
import {
  Category,
  fetchCategories,
} from "../../common/requests/categoriesRequest";
import { Spinner } from "../../common/components/Spinner";
import { QuizForm } from "./QuizForm";

interface Props {
  onSubmit: (
    amount: number,
    difficulty: string | undefined,
    category: Category | undefined
  ) => void;
}

export const QuizFormPage = ({ onSubmit }: Props) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchCategories().then((categoryResponse) => {
      setCategories(categoryResponse);
      setIsLoading(false);
    });
  }, []);

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
