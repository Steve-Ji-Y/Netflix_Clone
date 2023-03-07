import styles from "./BrowseShows.module.css";
import ShowRow from "../ShowRow/ShowRow";
import { useState } from "react";

const BrowseShows = ({ collection }) => {
  const [activeCardId, setActiveCardId] = useState(null);
  const [lastIdChange, setLastIdChange] = useState(0);

  const handleMouseOver = (cardId) => {
    setTimeout(() => {
      console.log(Date.now() - lastIdChange)
      if (Date.now() - lastIdChange > 1000) {
        setActiveCardId(cardId);
      }
    }, 1000);
  };

  const handleMouseOut = () => {
    setActiveCardId(null);
  };

  return (
    <div className={styles["browse-shows"]}>
      {collection.map((item) => {
        return (
          <ShowRow
            key={item.category}
            category={item.category}
            shows={item.shows}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            lastChangeTime={setLastIdChange}
            activeCardId={activeCardId}
          />
        );
      })}
    </div>
  );
};

export default BrowseShows;
