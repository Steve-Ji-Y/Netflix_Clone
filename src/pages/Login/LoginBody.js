import React from "react";
import styles from "./LoginBody.module.css";
import SignInForm from "./SignInForm";

const LoginBody = () => {
  return (
    <div className={styles["loginBody-wrapper"]}>
      <div className={styles["login-content"]}>
        <main className={styles["login-content-main"]}>
          <h1 className={styles["login-Title"]}>Sign In</h1>
          <SignInForm></SignInForm>
        </main>
        <div className={styles["login-content-signup"]}></div>
      </div>
    </div>
  );
};

export default LoginBody;
