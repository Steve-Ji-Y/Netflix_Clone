import styles from "./BrowseBillboard.module.css";
import BillboardInfo from "./BillboardInfo/BillboardInfo";

const BrowseBillboard = (props) => {
  return (
    <>
      <div className={styles["info-animation-container"]}></div>
      <div className={styles["billBoard-transition"]}></div>
      <div className={styles["billBoard-wrapper"]}>
          <img
            src="https://image.tmdb.org/t/p/w1280/uDgy6hyPd82kOHh6I95FLtLnj6p.jpg"
            alt="Billboard Img"
          />
        <BillboardInfo show={props.show}/>

      </div>
    </>
  );
};

export default BrowseBillboard;
