import styles from "./BrowseBillboard.module.css";
import BillboardInfo from "./BillboardInfo/BillboardInfo";
import { useEffect, useState } from "react";

const BrowseBillboard = ({ show, useBigBg }) => {
  return (
    <>
      <div className={styles["info-animation-container"]}></div>
      <div className={styles["billBoard-transition"]}></div>
      <div className={styles["billBoard-wrapper"]}>
        <img
          src={`https://image.tmdb.org/t/p/${useBigBg ? "original" : "w1280"}${
            show.backdrop
          }`}
          alt="Billboard Img"
        />
        <BillboardInfo show={show} />
      </div>
    </>
  );
};

export default BrowseBillboard;
