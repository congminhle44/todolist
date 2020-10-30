import React, { FC, ReactNode, useState } from "react";

import { createPortal } from "react-dom";

import styles from "./modal.module.css";

const modal = document.getElementById("modal") as HTMLElement;

interface ModalProps {
  element?: any;
  head?: ReactNode;
  content?: ReactNode;
  foot?: ReactNode;
}

const Modal: FC<ModalProps> = ({ element, head, content, foot }) => {
  const renderModal = () => {
    return (
      <div className={styles.modalWrapper}>
        <div className={styles.modal}>
          <div className={styles.head}>{head}</div>
          <div className={styles.main}>
            <div className={styles.content}>{content}</div>
            <div className={styles.foot}>{foot}</div>
          </div>
        </div>
      </div>
    );
  };

  const [container] = React.useState(() => {
    const el = document.createElement(element);
    return el;
  });

  React.useEffect(() => {
    modal.appendChild(container);
    return () => {
      modal.removeChild(container);
    };
  }, [container]);

  return createPortal(renderModal(), container);
};

export default Modal;
