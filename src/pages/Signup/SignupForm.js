import React, { useRef } from "react";
import styles from "./SignupForm.module.css";
import Input from "../../components/UI/Input";
import Button from "../../components/UI/Button";
import useInput from "../../hooks/useInput";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const errorMsgUserName = "Please enter a valid email or phone number";

const errorMsgPassword =
  "Your password must contain between 4 and 60 characters";

const ErrorMsg = (props) => {
  return <div className={styles.errorMsg}>{props.msg}</div>;
};

// Component is here

const SignInForm = (props) => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const { signup } = useAuth();
  const navigate = useNavigate();

  const {
    value: enteredEmail,
    isEmpty: emailIsEmpty,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    isValid: enteredEmailIsValid,
    validate: validateEmail,
  } = useInput((email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  });

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
        const result = await signup(enteredEmail, enteredPassword);
        console.log(result);
        if (result.code !== 400) {
          navigate("../browse")
        } else {
          console.log(result);
        }
      } catch (error) {
        console.log(error)
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
      <Button className={styles.signupBtn}>Sign Up</Button>
    </form>
  );
};

export default SignInForm;
