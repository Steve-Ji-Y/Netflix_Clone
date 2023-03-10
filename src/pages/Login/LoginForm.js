import React, { useRef } from "react";
import styles from "./LoginForm.module.css";
import Input from "../../components/UI/Input";
import Button from "../../components/UI/Button";
import { useAuth } from "../../context/AuthContext";
import useInput from "../../hooks/useInput";
import { useNavigate } from "react-router-dom";


const errorMsgUserName = "Please enter a valid email or phone number";

const errorMsgPassword =
  "Your password must contain between 4 and 60 characters";

const ErrorMsg = (props) => {
  return <div className={styles.errorMsg}>{props.msg}</div>;
};

const SignInForm = (props) => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();
  const { login } = useAuth();



  const {
    value: enteredEmail,
    isEmpty: emailIsEmpty,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    isValid: enteredEmailIsValid,
    validate: validateEmail,
  } = useInput((value) => value.length > 4);

  const {
    value: enteredPassword,
    isEmpty: passwordIsEmpty,
    hasError: passwordInputHasError,
    valueChangeHandler: passwordChangeHandler,
    valueBlurHandler: passwordBlurHandler,
    isValid: enteredPasswordIsValid,
    validate: validatePassword,
  } = useInput((value) => value.length > 3);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    validateEmail();
    validatePassword();
    if (!enteredEmailIsValid || !enteredPasswordIsValid) {
      return;
    } else {
      try {
        const result = await login(enteredEmail, enteredPassword);
        const { uid } = result.user;
        console.log(uid);
        if (uid) {
          navigate("../browse")
        }
      } catch (error) {
        console.log("error");
        props.setLoginStatus(false);
      }
    }
  };

  return (
    <form className={styles.SignInForm} onSubmit={onSubmitHandler}>
      <div className={styles.inputIdentification}>
        <Input
          label={"Email or phone number"}
          input={{
            id: "User_identification",
            onBlur: emailBlurHandler,
            onChange: emailChangeHandler,
            "data-is-empty": emailIsEmpty,
            "data-has-error": emailInputHasError,
          }}
          className={styles.inputDark}
          ref={emailRef}
        ></Input>
        {emailInputHasError && <ErrorMsg msg={errorMsgUserName} />}
      </div>
      <div className={styles.inputPassword}>
        <Input
          label={"Password"}
          input={{
            id: "User_password",
            onBlur: passwordBlurHandler,
            onChange: passwordChangeHandler,
            "data-is-empty": passwordIsEmpty,
            "data-has-error": passwordInputHasError,
          }}
          type={"password"}
          className={styles.inputDark}
          ref={passwordRef}
        ></Input>
        {passwordInputHasError && <ErrorMsg msg={errorMsgPassword} />}
      </div>
      <Button className={styles.signinBtn}>Sign In</Button>
    </form>
  );
};

export default SignInForm;
