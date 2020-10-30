import React, { FC, useState } from "react";

import { Plus } from "../../Icons";

import Button from "../Button";

import Input from "../Input";

import Modal from "../Modal";

import styles from "./add.module.css";

interface AddProps {
  createNote?: any;
}

const AddButton: FC<AddProps> = ({ createNote }) => {
  const [show, setShow] = useState(false);

  const [listObj, setListObj] = useState({});

  const handleTyping = (e: any) => {
    const { name, value } = e.target;

    setListObj((listObj) => ({ ...listObj, [name]: value }));
  };

  const addNote = () => {
    createNote(listObj);
    setShow(false);
  };

  return (
    <div>
      {show ? (
        <Modal
          head={<p>Create note</p>}
          content={
            <div>
              <div className={styles.name}>
                <Input
                  onChange={handleTyping}
                  name="name"
                  label="Name"
                  placeholder="Type name"
                />
              </div>
              <div className={styles.des}>
                <Input
                  onChange={handleTyping}
                  name="description"
                  label="Description"
                  placeholder="Type description"
                />
              </div>
            </div>
          }
          foot={
            <div className={styles.event}>
              <div className={styles.cancel}>
                <Button
                  onCancel={() => {
                    setShow(false);
                  }}
                  ghost
                >
                  Cancel
                </Button>
              </div>
              <div className={styles.add}>
                <Button onOk={addNote}>Add</Button>
              </div>
            </div>
          }
        />
      ) : null}
      <div
        onClick={() => {
          setShow(true);
        }}
        className={styles.plus}
      >
        <Plus />
      </div>
    </div>
  );
};

export default AddButton;
