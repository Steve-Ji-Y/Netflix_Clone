import React from "react";
import styles from "./LoginForm.module.css";
import Input from "../../components/UI/Input";
import Button from "../../components/UI/Button";

const SignInForm = () => {
  return (
    <form className={styles.SignInForm}>
      <div className={styles.inputIdentification}>
        <Input label={'Email or phone number'} input={{ id: "User_identification" }} className={styles.inputDark}></Input>
      </div>
      <div className={styles.inputPassword}>
        <Input label={'Password'} input={{ id: "User_password" }} type={'password'} className={styles.inputDark}></Input>
      </div>
      <Button className={styles.signinBtn}>Sign In</Button>
    </form>
  );
};

export default SignInForm
