import React from "react";
import styles from "./BrowseFocusPreview.module.css";
import Close from "../../../components/UI/Close";
import { useNavigate } from "react-router-dom";

const BrowseFocusPreview = ({img}) => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("../");
  }
  return (
    <div className={styles["preview-bg-wrapper"]}>
      <h1 className={styles["preview-title"]}>The Last of Us</h1>
      <img
        src={`https://image.tmdb.org/t/p/w1280${img}`}
        alt="Billboard Img"
        className={styles["preview-bg-img"]}
      />
      <Close onClick={clickHandler}/>
      <div className={styles.bgTransition}></div>
    </div>
  );
};

export default BrowseFocusPreview;
