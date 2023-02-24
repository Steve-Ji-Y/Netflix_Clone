import React from "react";
import Logo from "../UI/Logo";
import styles from './Header.module.css'

const Header = (props) => {
  return (
    <div className={styles['header-wrapper']}>
      <header className={styles.header}>
        <Logo></Logo>
        {props.children}
      </header>
    </div>
  );
};

export default Header;
