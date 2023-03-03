import React from "react";
import Logo from "../../components/UI/Logo";
import styles from "./Signup.module.css";
import SignupBody from "./SignupBody";
import Background from "../../components/Background/Background";
import useScreenWidth from "../../hooks/useScreenWidth";

// TODO: fix logo by using an actual SVG as the sizing needs to be different from Home's logo sizing

const Login = () => {

  const isScreenLarge = useScreenWidth(740);

  return (
    <div className={styles["login-wrapper"]}>
      {isScreenLarge && <Background />}
      <div className={styles.signupHeader}>
        <Logo className={styles.signupLogo}/>
      </div>
      <SignupBody />
    </div>
  );
};

export default Login;
