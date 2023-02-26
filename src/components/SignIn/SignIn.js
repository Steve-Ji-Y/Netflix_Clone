import React from "react";
import styles from "./SignIn.module.css"
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
      <Link to="login" className={styles.signin}>Sign In</Link>
  )
}

export default SignIn
