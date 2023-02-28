import React from "react";
import Logo from "../../components/UI/Logo";
import styles from "./Signup.module.css";
import SignupBody from "./SignupBody";
import Background from "../../components/Background/Background";
import useBackground from "../../hooks/useBackground";

// TODO: fix logo by using an actual SVG as the sizing needs to be different from Home's logo sizing

const Login = () => {

  const isScreenLarge = useBackground();

  return (
    <div className={styles["login-wrapper"]}>
      {isScreenLarge && <Background />}
      <div className={styles.loginHeader}>
        <Logo className={styles.loginLogo}/>
      </div>
      <SignupBody />
    </div>
  );
};

export default Login;
