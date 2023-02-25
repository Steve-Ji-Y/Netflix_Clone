import React from "react";
// import Form from "../../../components/Form/Form.js";
import mainData from "../../../data/home-main.json";
import styles from "./StoryMain.module.css"
import smallbg from "../../../assets/images/home-bg-small.jpg"
import mediumbg from "../../../assets/images/home-bg-medium.jpg"
import largebg from "../../../assets/images/home-bg-large.jpg"
import SignupEmail from "../../../components/Form/SignupEmail";

const StoryMain = () => {
  return (
    <div className= {styles.main}>
      <div className={styles.background}>
        <img src={smallbg} srcSet={`${smallbg} 900w, ${mediumbg} 1400w, ${largebg} 1800w`} alt="bakground"></img>
      </div>
      <div className={styles.mainStory}>
        <h1 className={styles.title}> {mainData.title}</h1>
        <h2 className={styles.subtitle}> {mainData.subtitle}</h2>
      </div>
      <SignupEmail/>
    </div>
  );
};

export default StoryMain;
