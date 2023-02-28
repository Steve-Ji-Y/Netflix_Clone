import React from "react";
import styles from "./SignupBody.module.css";
import SignupForm from "./SignupForm";


const LoginBody = () => {

  return (
    <div className={styles["signupBody-wrapper"]}>
      <div className={styles["signup-content"]}>
        <main className={styles["signup-content-main"]}>
          <h1 className={styles["signup-Title"]}>Sign Up</h1>
          <SignupForm ></SignupForm>
        </main>
      </div>
    </div>
  );
};

export default LoginBody;
