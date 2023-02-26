import React from "react";
import logo from "../../assets/images/logo.svg";
import styles from "./Logo.module.css";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <span className={styles["logo-wrapper"]}>
        <img src={logo} alt="Netflix" className={styles.logo}></img>
      </span>
    </Link>
  );
};

export default Logo;
