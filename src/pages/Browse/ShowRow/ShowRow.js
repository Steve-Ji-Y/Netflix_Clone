import React from "react";
import styles from "./ShowRow.module.css";
import ShowCard from "../ShowCard/ShowCard";
import Button from "../../../components/UI/Button";
import useSlider from "../../../hooks/useSlider";




const ShowRow = ({ shows, category }) => {
  const {
    counter,
    isTouched,
    isHover,
    clickHandlerLeft,
    clickHandlerRight,
    hoverHandler,
    blurHandler,
  } = useSlider(9);

  const leftBtnStyles = {
    visibility: isTouched ? "visible" : "hidden"
  }
  const rightBtnStyles = {
    visibility: isHover ? "visible" : "hidden"
  }

  return (
    <div className={styles["showRow-wrapper"]} onMouseOver={hoverHandler} onMouseOut={blurHandler}>
      <h2 className={styles["showRow-title"]}>{category}</h2>
      <div className={styles["showRow-container"]}>
          <Button className={styles["showRow-handle"]} style={leftBtnStyles} onClick={clickHandlerLeft}>
            <div className={styles["showRow-handle-text"]}>&#8249;</div>
          </Button>
        <div className={styles["showRow"]} style={{ '--counter': counter }}>
          {shows.map((show) => {
            return <ShowCard key={show.id} show={show} />;
          })}
        </div>
        <Button className={styles["showRow-handle"]} style={rightBtnStyles} onClick={clickHandlerRight}>
          <div className={styles["showRow-handle-text"]} >&#8250;</div>
        </Button>
      </div>
    </div>
  );
};

export default ShowRow;
