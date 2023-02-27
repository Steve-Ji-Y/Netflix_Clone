import React from "react";
import Logo from "../UI/Logo";
import styles from "./Header.module.css";

const Header = (props) => {
  const className = `${styles["header-wrapper"]} ${props.className}`;

  return (
    <div className={className}>
      <header className={styles.header}>
        <Logo></Logo>
        {props.children}
      </header>
    </div>
  );
};

export default Header;
