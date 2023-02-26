import React from "react";
import styles from "./LoginBackground.module.css";
const largebg = process.env.PUBLIC_URL + "/images/home-bg-large.jpg";

const LoginBackground = () => {
  return (
      <div className={styles["login-background-image"]}>
      <img
          src={largebg}
          alt="bakground"
        ></img>
      </div>
  );
}

export default LoginBackground;
