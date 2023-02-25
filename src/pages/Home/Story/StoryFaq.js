import React, { useState } from "react";
import styles from "./StoryFaq.module.css";
import Card from "../../../components/UI/Card";
import faqData from "../../../data/home-faq.json";
import SignupEmail from "../../../components/Form/SignupEmail";

const Faq = () => {
  const [faqStatus, setDropDownStatus] = useState(new Array(7).fill(false));

  const clickHandler = (event) => {
    const node = event.target.parentElement;
    const id = Array.from(node.parentElement.children).indexOf(node);
    setDropDownStatus((prev) => {
      const arr = [...prev];
      if (prev.every(value => !value) || prev.indexOf(true) === id) {
        arr[id] = !arr[id];
        return arr;
      } else {
        const newarr = arr.map((value, index) => {
          if (index === id || index === arr.indexOf(true)) {
            return !value
          }
          return value
        });
        return newarr
      }
    });

  };

  const contentClassClosed = `${styles.content} ${styles.closed}`;
  const contentClassOpen = `${styles.content} ${styles.open}`;

  return (
    <div className={styles.faqWrapper}>
      <Card className={styles.faq}>
        <h1 className={styles.title}>Frequently Asked Questions</h1>
        <ul className={styles.faqList} onClick={clickHandler}>
          {faqData.map((item) => {
            return (
              <li key={item.id} className={styles.faqItem}>
                {/* TODO: add SVG click using span + svg inside button */}
                <button className={styles.question}>{item.title}</button>
                <div
                  className={
                    faqStatus[item.id] ? contentClassOpen : contentClassClosed
                  }
                >
                  <div className={styles.contentInner}> {item.content}</div>
                </div>
              </li>
            );
          })}
        </ul>
      </Card>
      <div className={styles.SignupWrapper}>
        <SignupEmail/>
      </div>
    </div>
  );
};

export default Faq;
