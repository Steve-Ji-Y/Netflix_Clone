import React, { useState } from "react";
import styles from "./SignupBody.module.css";
import SignupForm from "./SignupForm";
import { Link } from "react-router-dom";

const LoginBody = () => {
  const [isLoginSucess, setIsLoginSucess] = useState(true);

  const SigninFailMsg = () => {
    return (
      <div className={styles.signinFailMsg}>
        Sorry, we can't find an account with this email address. Please try again
        or&nbsp;
        <Link to={'/'}>create a new account</Link>.
      </div>
    );
  };



  return (
    <div className={styles["loginBody-wrapper"]}>
      <div className={styles["login-content"]}>
        <main className={styles["login-content-main"]}>
          <h1 className={styles["login-Title"]}>Sign In</h1>
          {<SigninFailMsg/> && isLoginSucess  }
          <SignupForm setLoginStatus={setIsLoginSucess}></SignupForm>
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
