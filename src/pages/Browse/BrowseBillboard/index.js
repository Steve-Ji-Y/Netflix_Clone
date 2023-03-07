import styles from "./BrowseBillboard.module.css";
import BillboardInfo from "./BillboardInfo/BillboardInfo";

const BrowseBillboard = ({show, useBigBg}) => {
  const bgLink = show.backdrop;

  return (
    <>
      <div className={styles["info-animation-container"]}></div>
      <div className={styles["billBoard-transition"]}></div>
      <div className={styles["billBoard-wrapper"]}>
          <img
            src={useBigBg ? `https://image.tmdb.org/t/p/original${bgLink}` : `https://image.tmdb.org/t/p/w1280${bgLink}`}
            alt="Billboard Img"
          />
        <BillboardInfo show={show}/>

      </div>
    </>
  );
};

export default BrowseBillboard;
