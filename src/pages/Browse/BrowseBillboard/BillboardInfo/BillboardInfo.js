import React from "react";
import styles from "./BillboardInfo.module.css";
import { Link } from "react-router-dom";

function truncateString(s) {
  const words = s.trim().split(/\s+/);
  const truncated = words.slice(0, 200).join(' ');
  var lastPeriod = truncated.lastIndexOf(".");

  if (words.length <= 200) {
    return s;
  } else if (lastPeriod !== -1 && lastPeriod + 1 < s.length) {
    return truncated.substring(0, lastPeriod + 1);
  } else {
    return truncated;
  }
}


const BillboardInfo = ({show}) => {
  console.log(show)

  const description = truncateString(show.overview);

  return (
    <div className={styles["info-container"]}>
      <div className={styles["info-content"]}>
        <h1 className={styles["info-title"]}>{show.title}</h1>
        <p className={styles["info-description"]}>
        {description}
        </p>
      </div>
      <Link to={`${show.id}`} className={styles.moreInfo} >More Info</Link>
    </div>
  );
};

export default BillboardInfo;
