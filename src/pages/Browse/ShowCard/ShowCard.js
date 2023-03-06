import React from "react";
import styles from "./ShowCard.module.css";
import { Link } from "react-router-dom";

const ShowCard = ({ show }) => {
  return (
    <div className={styles["card-wrapper"]}>
      <Link className={styles["card-link"]}>
        <img className={styles["card-image"]} src={show.backdrop} alt=""></img>
      </Link>
    </div>
  );
};

export default ShowCard;
