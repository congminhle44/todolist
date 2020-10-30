import React, { FC } from "react";
import Debounce from "../../Helper/Debounce";
import { Search } from "../../Icons";
import Input from "../Input";

import styles from "./support.module.css";

interface SupportProps {
  newLimit?: any;
  total: number;
  search?: any;
}

const Support: FC<SupportProps> = ({ newLimit, total, search }) => {
  const handleNewLimit = (e: any) => {
    const { value } = e.target;
    newLimit(value);
  };

  const handleSearch = Debounce((e: any) => {
    const { value } = e.target;
    search(value);
  }, 500);

  return (
    <div className={styles.support}>
      <div className={styles.search}>
        <Input
          onChange={handleSearch}
          icon={<Search />}
          placeholder="Search for note"
        />
      </div>
      <div className={styles.optionWrapper}>
        <p className={styles.title}>Notes</p>
        <select
          onChange={handleNewLimit}
          className={styles.select}
          name="limit"
        >
          <option className={styles.option} value="8">
            8
          </option>
          <option
            className={styles.option}
            value="16"
            disabled={16 > total ? true : false}
          >
            16
          </option>
          <option
            className={styles.option}
            value="32"
            disabled={32 > total ? true : false}
          >
            32
          </option>
        </select>
      </div>
    </div>
  );
};

export default Support;
