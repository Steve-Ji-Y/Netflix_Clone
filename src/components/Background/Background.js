import React from "react";
import styles from "./Background.module.css";
const smallbg = process.env.PUBLIC_URL + "/images/home-bg-small.jpg";
const mediumbg = process.env.PUBLIC_URL + "/images/home-bg-medium.jpg";
const largebg = process.env.PUBLIC_URL + "/images/home-bg-large.jpg";

const Background = () => {
  return (
      <div className={styles["background-image"]}>
        <img
          src={smallbg}
          srcSet={`${smallbg} 900w, ${mediumbg} 1400w, ${largebg} 1800w`}
          alt="bakground"
        ></img>
      </div>
  );
}

export default Background;
