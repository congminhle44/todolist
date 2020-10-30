import React, { FC, useCallback, useEffect, useState } from "react";

import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import AddButton from "../Components/AddButton";

import Header from "../Components/Header";

import List from "../Components/List";

import * as action from "../Redux/List/action";

interface IndexProps {}

const Index: FC<IndexProps> = (props: any) => {
  const [page, setPage] = useState(1);

  const [limit, setLimit] = useState(8);

  const dispatch = useDispatch();

  const getList = useCallback(() => dispatch(action.getList(page, limit)), [
    page,
    limit,
    dispatch,
  ]);

  const editList = (id: number, listobj: object) =>
    dispatch(action.editList(id, listobj));

  const deleteList = (id: number) => {
    dispatch(action.deleteList(id));
  };

  const payload = useSelector(
    (state: RootStateOrAny) => state.listReducer.payload
  );

  const loading = useSelector(
    (state: RootStateOrAny) => state.listReducer.loading
  );

  const total = useSelector((state: RootStateOrAny) => state.listReducer.total);

  useEffect(() => {
    getList();
  }, [getList]);

  return (
    <div>
      <Header />
      <div className="main">
        <List
          list={payload}
          deleteList={deleteList}
          editList={editList}
          total={total}
          loading={loading}
          next={() => {
            setPage(page + 1);
          }}
        />
      </div>
      <AddButton />
    </div>
  );
};

export default Index;
