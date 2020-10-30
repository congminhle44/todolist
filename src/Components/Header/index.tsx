import React, { FC } from "react";
import Debounce from "../../Helper/Debounce";
import { Search } from "../../Icons";

import styles from "./header.module.css";

interface HeaderProps {
  search?: any;
}

const Header: FC<HeaderProps> = ({ search }) => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>Todo</div>
      <div className={styles.searchContainer}>
        <div className={styles.searchArea}>
          <div className={styles.search}>
            <Search />
          </div>
          <input
            onChange={Debounce((e: any) => {
              search(e.target.value);
            }, 500)}
            className={styles.input}
            placeholder="Search for note"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
