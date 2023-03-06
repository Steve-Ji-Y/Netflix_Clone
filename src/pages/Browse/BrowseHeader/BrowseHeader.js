import styles from "./BrowseHeader.module.css";
import React from "react";
import Logo from "../../../components/UI/Logo";
import { Link } from "react-router-dom";

const BrowseMain = () => {
  return (
    <>
      <header className={styles["browse-Header"]}>
        <Logo />
        <Link className={styles["browse-Signout"]}>Sign Out</Link>
      </header>
    </>
  );
};

export default BrowseMain;
