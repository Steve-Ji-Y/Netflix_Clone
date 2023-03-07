import styles from "./BrowseHeader.module.css";
import React from "react";
import Logo from "../../../components/UI/Logo";
import { Link } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";

const BrowseMain = () => {
  const {logout} = useAuth()
  return (
    <>
      <header className={styles["browse-Header"]}>
        <Logo />
        <Link onClick={() => {logout()}} className={styles["browse-Signout"]}>Sign Out</Link>
      </header>
    </>
  );
};

export default BrowseMain;
