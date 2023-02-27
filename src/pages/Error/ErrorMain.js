import React from "react";
import styles from "./ErrorMain.module.css";
import { Link } from "react-router-dom";

const ErrorMain = () => {
  return (
    <div className={styles.errorContent}>
      <h1 className={styles.errorContentTitle}>Lost your way?</h1>
      <div className={styles.errorContentMsg}>
        <p className={styles.errorContentMsgText}>
          Sorry, we can't find that page. You'll find lots to explore on the
          home page.
        </p>
      </div>
      <div className={styles.errorContentBtn}>
        <Link to="/" className={styles.errorContentBtnLink}>
          Netflix Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorMain;
