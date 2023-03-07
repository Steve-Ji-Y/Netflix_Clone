import React from "react";
import styles from "./ShowCard.module.css";
import {useNavigate } from "react-router-dom";


const ShowCard = ({ show }) => {
  const navigate = useNavigate();


  return (
    <div
      className={styles["card-wrapper"]}
      onClick={() => navigate(`${show.id}`)}
    >
      <img className={styles["card-image"]} src={show.backdrop} alt=""></img>
      <div className={styles["card-info"]}>
        <div className={styles["card-info-wrapper"]}>
          Something Something Something
        </div>
      </div>
    </div>
  );
};

export default ShowCard;
