import React from "react";
import styles from "./BillboardInfo.module.css";
import { Link } from "react-router-dom";

function truncateString(sentences) {
  if (sentences.length <= 300) {
    return sentences;
  } else {
    return sentences.slice(0, sentences.slice(0, 300).lastIndexOf(".") + 1);
  }
}


const BillboardInfo = ({show}) => {


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
