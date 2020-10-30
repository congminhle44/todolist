import clsx from "clsx";
import { type } from "os";
import React, { AllHTMLAttributes, FC, ReactNode } from "react";

import styles from "./button.module.css";

interface ButtonProps extends AllHTMLAttributes<HTMLButtonElement> {
  ghost?: boolean;
  onCancel?: () => void;
  onOk?: () => void;
}

const Button: FC<ButtonProps> = ({ children, ghost, onCancel, onOk }) => {
  return (
    <button
      onClick={onCancel || onOk}
      className={clsx(styles.button, ghost && styles.ghost)}
    >
      {children}
    </button>
  );
};

export default Button;
