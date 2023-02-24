import React from "react";
import logo from "../../assets/images/logo.svg";
import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <span className={styles['logo-wrapper']}>
      <img src={logo} alt="Netflix" className={styles.logo}></img>
    </span>
  );
};

export default Logo;
