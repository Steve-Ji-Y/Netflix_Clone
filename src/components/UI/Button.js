import React from "react";
import styles from "./Button.module.css"

const Button = (props) => {
  const className = `${styles.defaultBtn} ${props.className} `
  return (
    <button className={className} onClick={props.onClickHandler}>{props.children}</button>
  )
}

export default Button
