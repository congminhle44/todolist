import React, { AllHTMLAttributes, FC, ReactNode } from "react";

import styles from "./input.module.css";

interface InputProps extends AllHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: ReactNode;
}

const Input: FC<InputProps> = ({ label, placeholder, icon, ...others }) => {
  return (
    <div className={styles.container}>
      {label ? (
        <p className={styles.label} placeholder={placeholder}>
          {label}
        </p>
      ) : null}
      <div className={styles.inputWrapper}>
        {icon ? <div className={styles.icon}>{icon}</div> : null}
        <input
          {...others}
          className={styles.input}
          placeholder={placeholder}
          type="text"
        />
      </div>
    </div>
  );
};

export default Input;
