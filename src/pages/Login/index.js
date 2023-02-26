import React from "react";
import Header from "../../components/Header/Header";
import styles from "./Login.module.css";
import LoginBody from "./LoginBody";

// TODO: fix logo by using an actual SVG as the sizing needs to be different from Home's logo sizing


const Login = () => {
  return (
    <div className={styles['login-wrapper']}>
      <Header />
      <LoginBody />
    </div>
  );
};

export default Login;
