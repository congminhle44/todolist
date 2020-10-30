import React, { FC } from "react";
import { Plus } from "../../Icons";

import styles from "./add.module.css";

interface AddProps {}

const AddButton: FC<AddProps> = (props) => {
  return (
    <div className={styles.plus}>
      <Plus />
    </div>
  );
};

export default AddButton;
