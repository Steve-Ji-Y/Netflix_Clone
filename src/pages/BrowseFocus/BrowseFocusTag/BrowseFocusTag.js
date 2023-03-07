import React from "react";
import styles from "./BrowseFocusTag.module.css";

const tagsConvert = (tags) => {
  return tags.map(tag => tag.charAt(0).toUpperCase() + tag.slice(1)).join(", *").split("*");
};

// to be dynamically generated
const BrowseFocusTag = ({ label, tags }) => {
  return (
    <div className={styles["detail-tag"]}>
      <span className={styles["detail-tag-label"]}>{label}</span>
      {tagsConvert(tags).map((tag) => <span key={tag} className={styles["detail-tag-item"]}>{tag}</span>)}
    </div>
  );
};

export default BrowseFocusTag;
