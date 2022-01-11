import { useState } from "react";
import { Input } from "./Input";

export const QuizFormPage = () => {
  const [value, setValue] = useState("");
  const onInputChange = (inputValue: string) => {
    setValue(inputValue);
  };
  return (
    <div>
      <h1>Quiz form</h1>
      <form>
        input value is {value}
        <Input onInputChange={onInputChange} />
        <button className="form-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
