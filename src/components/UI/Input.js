import React from "react";
import styles from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  const inputClasses = `${styles.labelWrapper} ${props.className}`
  return (
      <label className={inputClasses}>
        <label className={styles.label} htmlFor={props.input.id}>
          {props.label}
        </label>
        <input className={styles.input}  ref={ref} type={props.type || 'text'} {...props.input}/>
      </label>
  );
});

export default Input;
