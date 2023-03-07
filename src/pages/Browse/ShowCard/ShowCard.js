import React from "react";
import styles from "./ShowCard.module.css";
import { Link } from "react-router-dom";
import { useId } from "react";

const ShowCard = ({ show, onMouseOver, onMouseOut, activeCardId, lastChangeTime }) => {
  const id = useId();
  // console.log(lastChangeTime);
  const mouseOverHandler = () => {
    onMouseOver(id);
    console.log(Date.now())
    lastChangeTime(Date.now());
  };

  const mouseOutHandler = () => {
    lastChangeTime(Date.now());
      onMouseOut();
  };

  return (
    <div className={styles["card-wrapper"]}>
      {activeCardId === id && (
        <div
          className={styles["card-overlay"]}
          onMouseOut={mouseOutHandler}
        ></div>
      )}
      <Link
        to={`${show.id}`}
        className={styles["card-link"]}
        onMouseOver={mouseOverHandler}
        oneMouseOut={mouseOutHandler}
        // style={{ pointerEvents: isHovered ? 'none' : 'auto' }}
      >
        <img className={styles["card-image"]} src={show.backdrop} alt=""></img>
      </Link>
    </div>
  );
};

export default ShowCard;
