import React from "react";
import styles from "./ShowCard.module.css";
import {useNavigate } from "react-router-dom";
import {ReactComponent as MoreInfo} from "../../../assets/images/down-arrow-circle.svg"


const ShowCard = ({ show }) => {
  const navigate = useNavigate();


  return (
    <div
      className={styles["card-wrapper"]}
      onClick={() => navigate(`${show.id}`)}
    >
      <img className={styles["card-image"]} src={`https://image.tmdb.org/t/p/w780${show.backdrop}`} alt=""></img>
      <div className={styles["card-info"]}>
        <h2 className={styles["title"]}>
          {show.title}
        </h2>
        <div className={styles['card-moreInfo']}><MoreInfo className={styles.moreInfoIcon}/></div>
      </div>
    </div>
  );
};

export default ShowCard;
