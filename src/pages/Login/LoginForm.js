import React, { useRef } from "react";
import styles from "./LoginForm.module.css";
import Input from "../../components/UI/Input";
import Button from "../../components/UI/Button";
import { useAuth } from "../../context/AuthContext";

const SignInForm = () => {
  const { login } = useAuth();

  const emailRef = useRef();
  const passwordRef = useRef();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log('sucess!')
  }

  return (
    <form className={styles.SignInForm} onSubmit={onSubmitHandler}>
      <div className={styles.inputIdentification}>
        <Input
          label={"Email or phone number"}
          input={{ id: "User_identification" }}
          className={styles.inputDark}
          ref={emailRef}
        ></Input>
      </div>
      <div className={styles.inputPassword}>
        <Input
          label={"Password"}
          input={{ id: "User_password" }}
          type={"password"}
          className={styles.inputDark}
          ref={passwordRef}
        ></Input>
      </div>
      <Button className={styles.signinBtn}>Sign In</Button>
    </form>
  );
};

export default SignInForm;
