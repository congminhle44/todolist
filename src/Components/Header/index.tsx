import React, { FC } from "react";
import { Search } from "../../Icons";

import styles from "./header.module.css";

interface HeaderProps {}

const Header: FC<HeaderProps> = (props) => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>Todo</div>
      <div className={styles.searchContainer}>
        <div className={styles.searchArea}>
          <div className={styles.search}>
            <Search />
          </div>
          <input className={styles.input} placeholder="Search for note" />
        </div>
      </div>
    </div>
  );
};

export default Header;
