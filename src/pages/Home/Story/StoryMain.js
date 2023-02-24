import React from "react";
// import Form from "../../../components/Form/Form.js";
import mainData from "../../../data/home-main.json";
import styles from "./StoryMain.module.css"
import smallbg from "../../../assets/images/home-bg-small.jpg"
import mediumbg from "../../../assets/images/home-bg-medium.jpg"
import largebg from "../../../assets/images/home-bg-large.jpg"

const StoryMain = () => {
  return (
    <div className= {styles.main}>
      <div className={styles.background}>
        <img src={smallbg} srcSet={`${smallbg} 900w, ${mediumbg} 1400w, ${largebg} 1800w`} alt="bakground"></img>
      </div>
      <div className={styles.mainStory}>
      <h1> {mainData.title}</h1>
        <h2> {mainData.subtitle}</h2>
      </div>
    </div>
  );
};

export default StoryMain;
