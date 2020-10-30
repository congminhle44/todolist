import React, { AllHTMLAttributes, FC } from "react";

import styles from "./input.module.css";

interface InputProps extends AllHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input: FC<InputProps> = ({ label, placeholder, ...others }) => {
  return (
    <div className={styles.container}>
      <label className={styles.label} placeholder={placeholder}>
        {label}
      </label>
      <input
        {...others}
        className={styles.input}
        placeholder={placeholder}
        type="text"
      />
    </div>
  );
};

export default Input;
