import React from "react";
import Logo from "../../components/UI/Logo";
import styles from "./Login.module.css";
import LoginBody from "./LoginBody";
import useScreenWidth from "../../hooks/useScreenWidth";
import Background from "../../components/Background/Background";

// TODO: fix logo by using an actual SVG as the sizing needs to be different from Home's logo sizing

const Login = () => {
  const isScreenLarge = useScreenWidth(740);


  return (
    <div className={styles["login-wrapper"]}>
      {isScreenLarge && <Background />}
      <div className={styles.loginHeader}>
        <Logo className={styles.loginLogo} />
      </div>
      <LoginBody />
    </div>
  );
};

export default Login;
