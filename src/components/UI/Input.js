import React, {useState} from "react";
import styles from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  const [isFocus, setIsFocus] = useState(false);

  const focusHandler = () => {
    setIsFocus(true);
  }
  const blurHandler = () => {
    setIsFocus(false);
  }

  const inputIsEmpty = props.input['data-is-empty'] || "";
  const inputHasError = props.input['data-has-error'] || "";

  const inputClasses = `${!inputHasError || styles.inputError} ${styles.labelWrapper} ${props.className}`;
  const labelClasses = `${(isFocus || !inputIsEmpty ) ? styles.labelFocus : styles.label}`;

  return (
    <label className={inputClasses} onFocus={focusHandler} onBlur={blurHandler}>
      <label className={labelClasses} htmlFor={props.input.id} >
        {props.label}
      </label>
      <input
        className={styles.input}
        ref={ref}
        type={props.type || "text"}
        {...props.input}
      />
    </label>
  );
});

export default Input;
