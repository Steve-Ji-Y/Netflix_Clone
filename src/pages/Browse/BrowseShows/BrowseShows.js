import styles from "./BrowseShows.module.css";
import ShowRow from "../ShowRow/ShowRow";
const BrowseShows = ({ collection }) => {




  return (
    <div className={styles["browse-shows"]}>
      {collection.map((item) => {
        return (
          <ShowRow
            key={item.category}
            category={item.category}
            shows={item.shows}
          />
        );
      })}
    </div>
  );
};

export default BrowseShows;
