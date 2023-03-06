import React from "react";
import styles from "./BrowseFocusDetail.module.css";
import BrowseFocusTag from "../BrowseFocusTag/BrowseFocusTag";

const BrowseFocusDetail = ({showInfo}) => {
  return (
    <div className={styles["detail-wrapper"]}>
      <div className={styles["detail-summary"]}>
      {showInfo.overview}
      </div>
      <div className={styles["detail-info"]}>
        <BrowseFocusTag label='starring: ' tags={showInfo.cast}/>
        <BrowseFocusTag label='keywords: ' tags={showInfo.keywords}/>

      </div>
      <div></div>
    </div>
  );
};

export default BrowseFocusDetail;
