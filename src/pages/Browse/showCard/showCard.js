import React from "react";
import styles from "./showCard.module.css"
import { Link } from "react-router-dom";

const ShowCard = ({show}) => {
  return (
    <div className={styles['card-wrapper']}>
    <Link>
    <img className={styles['card-image']} src={show.backdrop} alt=''></img></Link>
  </div>
  )

};

export default ShowCard;
