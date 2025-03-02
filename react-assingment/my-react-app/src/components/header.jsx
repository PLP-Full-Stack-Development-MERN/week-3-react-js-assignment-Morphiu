import React from "react";
import styles from "./header.module.css";

function Header(props) {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>{props.title}</h1>
    </header>
  );
}

export default Header;
