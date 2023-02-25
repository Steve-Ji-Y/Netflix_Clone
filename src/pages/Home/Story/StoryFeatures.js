import React from "react";
import Card from "../../../components/UI/Card";
import featuresData from "../../../data/home-features.json";
import styles from "./StoryFeatures.module.css";

// Gotta fix media query for this one, need to go from smallest to largest

const StoryFeature = () => {

  return (
    <div className={styles.features}>
      {featuresData.map((item) => {
        return (
          <div key={item.id} className={styles.cardOuterWrapper}>
            <div
              key={item.id}
              className={styles.cardWrapper}
              style={{ flexDirection: `${item.direction}` }}
            >
              <Card className={styles.cardText}>
                <h1>{item.title}</h1>
                <h2>{item.subtitle}</h2>
              </Card>
              <Card className={styles.cardImg}>
                <img
                  className={styles.featureImg}
                  src={item.image}
                  alt={item.alt}
                ></img>
              </Card>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StoryFeature;
