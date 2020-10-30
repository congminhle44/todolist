import clsx from "clsx";
import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import { Cancel, Check, Delete, Loading, Pencil } from "../../Icons";

import styles from "./list.module.css";

interface ListProps {
  list?: [];
  next?: any;
  total: number;
  loading?: boolean;
  editList?: any;
  deleteList?: any;
}

const List: FC<ListProps> = ({
  list,
  next,
  total,
  loading,
  editList,
  deleteList,
}) => {
  const [edit, setEdit] = useState(false);

  const [listId, setListId] = useState(null);

  const [listObj, setListObj] = useState({
    id: "",
    name: "",
    description: "",
    isDone: false,
    createdAt: null,
  });

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
  };

  const observer: any = useRef();

  const lastListItem = useCallback(
    (node: any) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          next();
        }
      }, options);
      if (node) observer.current.observe(node);
    },
    [observer, list]
  );

  const handleCheck = (obj: any) => {
    setListObj(obj);
    setListObj((listObj) => ({
      ...listObj,
      isDone: listObj.isDone === false ? true : false,
    }));
  };

  const handleTyping = (e: any) => {
    const { name, value } = e.target;
    setListObj((listObj) => ({ ...listObj, [name]: value }));
  };

  const handleEdit = (obj: any) => {
    if (edit === false) {
      setEdit(true);
      setListId(obj.id);
      setListObj(obj);
    } else {
      editList(obj.id, listObj);
      setEdit(false);
    }
  };

  const deleteNote = (id: any) => {
    deleteList(id);
  };

  useEffect(() => {
    if (listObj.id !== "") {
      editList(listObj.id, listObj);
    }
  }, [listObj]);

  const renderList = () => {
    if (list) {
      return list.map((item: any, index: number) => {
        let date = new Date(item.createdAt);
        let dd = date.getDay();
        let mm = date.getMonth();
        let yy = date.getFullYear();

        return (
          <div
            key={index}
            ref={
              list.length === index + 1 && list.length < total
                ? lastListItem
                : null
            }
            className={clsx(styles.card, item.isDone && styles.done)}
          >
            <div
              onClick={() => {
                handleCheck(item);
              }}
              className={styles.info}
            >
              <p className={styles.name}>
                {edit && item.id === listId ? (
                  <input
                    onChange={handleTyping}
                    name="name"
                    type="text"
                    defaultValue={item.name}
                  />
                ) : (
                  item.name
                )}
              </p>
              <p className={styles.date}>
                {dd} / {mm} / {yy}
              </p>
              {edit && item.id === listId ? (
                <textarea
                  className={styles.desInput}
                  defaultValue={item.description}
                  onChange={handleTyping}
                  name="description"
                />
              ) : (
                <p className={styles.des}>{item.description}</p>
              )}
            </div>
            <div className={styles.event}>
              <div
                className={clsx(styles.check, item.isDone && styles.checked)}
              >
                <Check />
              </div>
              {edit && item.id === listId ? (
                <div
                  onClick={() => {
                    setEdit(false);
                    setListId(null);
                  }}
                  className={styles.cancel}
                >
                  <Cancel />
                </div>
              ) : null}
              <div
                onClick={() => {
                  handleEdit(item);
                }}
                className={styles.pencil}
              >
                <Pencil />
              </div>

              {item.isDone ? (
                <div
                  onClick={() => {
                    deleteNote(item.id);
                  }}
                  className={styles.delete}
                >
                  <Delete />
                </div>
              ) : null}
            </div>
          </div>
        );
      });
    }
  };

  return (
    <div className={styles.list}>
      <p className={styles.title}>Your list</p>
      <div className={styles.cardWrapper}>{renderList()}</div>
      {loading ? (
        <div className={styles.loading}>
          <Loading />
        </div>
      ) : null}
    </div>
  );
};

export default List;
