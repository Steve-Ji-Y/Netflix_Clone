import React from "react";
import styles from "./LoginBody.module.css";
import LoginForm from "./LoginForm";
import { Link } from "react-router-dom";

const LoginBody = () => {
  return (
    <div className={styles["loginBody-wrapper"]}>
      <div className={styles["login-content"]}>
        <main className={styles["login-content-main"]}>
          <h1 className={styles["login-Title"]}>Sign In</h1>
          <LoginForm></LoginForm>
        </main>
        <div className={styles["login-content-signup"]}></div>
      </div>
      <div className={styles["login-alternate"]}>
        <div className={styles.signupNow}>
          <span className={styles["signupNow-title"]}>New to Netflix?</span>
          <Link className={styles["signupNow-Link"]}>Sign up now</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginBody;
