import React from "react";
import Logo from "../../components/UI/Logo";
import styles from "./Error.module.css";
import ErrorMain from "./ErrorMain";

const Error = () => {
  return (
    <div className={styles.errorPageWrapper}>
      <div className={styles.errorHeader}>
      <Logo className={styles.errorLogo}/>
      </div>
      <ErrorMain />
    </div>
  );
};

export default Error;
