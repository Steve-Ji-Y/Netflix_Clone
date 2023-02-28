import { useState } from "react";

const useInput = (validateFunc) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateFunc(enteredValue);
  const hasError = !valueIsValid && isTouched;
  const isEmpty = enteredValue.length === 0;

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const valueBlurHandler = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  const validate = () => {
    setIsTouched(true);
  }

  return {
    value: enteredValue,
    isEmpty,
    hasError,
    valueChangeHandler,
    valueBlurHandler,
    isValid: valueIsValid,
    reset,
    validate,
  };
};

export default useInput;
