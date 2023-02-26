import React from "react";
import logo from "../../assets/images/logo.svg";
import styles from "./Logo.module.css";
import { Link } from "react-router-dom";

const Logo = (props) => {
  const className = `${styles.logo} ${props.className}`
  return (
    <Link to="/">
      <span className={styles["logo-wrapper"]}>
        <img src={logo} alt="Netflix" className={className}></img>
      </span>
    </Link>
  );
};

export default Logo;
