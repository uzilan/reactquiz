import React, { ChangeEvent, useEffect, useState } from "react";
import { createQuiz, Question } from "./common/requests/quizRequest";
import { Dropdown } from "./common/components/Dropdown";
import { Input } from "./common/components/Input";
import styles from "./QuizFormPage.module.css";
import { Button } from "./common/components/Button";
import { Category, fetchCategories } from "./common/requests/categoriesRequest";
import { Spinner } from "./common/components/Spinner";

const difficultyOptions = ["Any difficulty", "Easy", "Medium", "Hard"];

export const QuizFormPage = () => {
  const [amount, setAmount] = useState(0);
  const [difficultyLevel, setDifficultyLevel] = useState("");
  const [quizQuestions, setQuizQuestions] = useState<Question[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<Category>();
  const [isLoading, setIsLoading] = useState(true);

  const onInputChange = (inputValue: number) => {
    setAmount(inputValue);
  };

  useEffect(() => {
    fetchCategories().then((categoryResponse) => {
      setCategories(categoryResponse);
      setIsLoading(false);
    });
  }, []);

  const onDropdownChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setDifficultyLevel(event.target.value);
  };

  const onCategoryChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedNameOfCategory = event.target.value;
    const newCategoryValue = categories.find(
      (category) => category.name === selectedNameOfCategory
    );
    setSelectedCategory(newCategoryValue);
  };

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const quizQuestions = await createQuiz(
      amount,
      difficultyLevel,
      selectedCategory
    );
    setQuizQuestions(quizQuestions);
  };

  return (
    <div>
      <h1>Quiz form</h1>
      {isLoading ? (
        <Spinner />
      ) : (
        <form onSubmit={onSubmit} className={styles.form}>
          <Input label="Amount" onInputChange={onInputChange} />
          <Dropdown
            options={difficultyOptions}
            label="Difficulty level"
            onChange={onDropdownChange}
          />
          <Dropdown
            options={categories.map((category) => category.name)}
            label="Category"
            onChange={onCategoryChange}
          />
          <Button type="submit">Submit</Button>
        </form>
      )}
    </div>
  );
};
