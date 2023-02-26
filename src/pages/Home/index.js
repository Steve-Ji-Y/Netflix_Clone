import React from "react";
import HomeHeader from "./HomeHeader";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.homeWrapper}>
      <div className={styles.homeContent}>
      <HomeHeader/>
      </div>

    </div>
  )
}


export default Home
