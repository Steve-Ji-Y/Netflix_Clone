import React from "react";
import { ReactComponent as CloseIcon} from "../../assets/images/close.svg";
import styles from "./Close.module.css";

const Close = (props) => {
  return (
    <div className={styles.closeWrapper} onClick={props.onClick}>
      <CloseIcon className={styles.closeIcon} />
    </div>
  )
};


export default Close;
