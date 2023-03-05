import React from "react";
import styles from "./billboardInfo.module.css";
import { Link } from "react-router-dom";

const BillboardInfo = () => {
  return (

    <div className={styles["info-container"]}>
      <div className={styles["info-content"]}>
        <h1 className={styles["info-title"]}>The Last of Us</h1>
        <p className={styles["info-description"]}>
          Twenty years after modern civilization has been destroyed, Joel, a
          hardened survivor, is hired to smuggle Ellie, a 14-year-old girl, out
          of an oppressive quarantine zone.
        </p>
      </div>
      <Link to="./" className={styles.moreInfo}>More Info</Link>
    </div>
  );
};

export default BillboardInfo;
