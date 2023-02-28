import React, { useMemo } from "react";
import Logo from "../../components/UI/Logo";
import styles from "./Login.module.css";
import LoginBody from "./LoginBody";
import useBackground from "../../hooks/useBackground";
import Background from "../../components/Background/Background";
import { useAuth } from "../../context/AuthContext";

// TODO: fix logo by using an actual SVG as the sizing needs to be different from Home's logo sizing

const Login = () => {
  const { currentUser } = useAuth();
  const isScreenLarge = useBackground();

  useMemo(() => {
    if (currentUser) {
      window.location.href = "/";
    }
  })

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
