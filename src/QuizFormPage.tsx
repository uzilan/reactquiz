import React, { ChangeEvent, useState } from "react";
import { createQuiz, Question } from "./common/requests/quizRequest";
import { Dropdown } from "./common/components/Dropdown";
import { Input } from "./common/components/Input";
import styles from "./QuizFormPage.module.css";
import { Button } from "./common/components/Button";

const difficultyOptions = ["Any difficulty", "Easy", "Medium", "Hard"];

export const QuizFormPage = () => {
  const [value, setValue] = useState("");
  const [difficultyLevel, setDifficultyLevel] = useState("");
  const [quizQuestions, setQuizQuestions] = useState<Question[]>([]);
  const onInputChange = (inputValue: string) => {
    setValue(inputValue);
  };

  const onDropdownChange = (event: ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();
    setDifficultyLevel(event.target.value);
  };

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const quizQuestions = await createQuiz(value, difficultyLevel);
    setQuizQuestions(quizQuestions);
  };

  return (
    <div>
      <h1>Quiz form</h1>
      <form onSubmit={onSubmit} className={styles.form}>
        input value is {value}
        <Input label="Amount" onInputChange={onInputChange} />
        <Dropdown
          options={difficultyOptions}
          label="Difficulty level"
          onChange={onDropdownChange}
        />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};
