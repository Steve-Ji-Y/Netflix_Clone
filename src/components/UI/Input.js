import React from "react";
import styles from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  return (
      <label className={styles.labelWrapper}>
        <label className={styles.label} htmlFor={props.input.id}>
          {props.label}
        </label>
        <input className={styles.input} {...props.input} ref={ref} />
      </label>
  );
});

export default Input;
