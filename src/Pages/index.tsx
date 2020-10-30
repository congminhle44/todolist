import React, { FC, useCallback, useEffect, useState } from "react";

import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import AddButton from "../Components/AddButton";

import Header from "../Components/Header";

import List from "../Components/List";
import Support from "../Components/Support";

import * as action from "../Redux/List/action";

interface IndexProps {}

const Index: FC<IndexProps> = (props: any) => {
  const [page, setPage] = useState(1);

  const [limit, setLimit] = useState(8);

  const [searchKey, setSearchKey] = useState("");

  const dispatch = useDispatch();

  const getList = useCallback(
    () => dispatch(action.getList(page, limit, searchKey)),
    [page, limit, dispatch, searchKey]
  );

  const createNote = (listobj: object) => dispatch(action.createList(listobj));

  const editList = (id: number, listobj: object) =>
    dispatch(action.editList(id, listobj));

  const deleteList = (id: number) => {
    dispatch(action.deleteList(id));
  };

  const payload = useSelector(
    (state: RootStateOrAny) => state.listReducer.payload
  );

  const searchPayload = useSelector(
    (state: RootStateOrAny) => state.listReducer.searchList
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
      <Header search={setSearchKey} />
      <div className="main">
        <Support search={setSearchKey} total={total} newLimit={setLimit} />
        <List
          list={searchKey === "" ? payload : searchPayload}
          deleteList={deleteList}
          editList={editList}
          total={total}
          loading={loading}
          next={() => {
            setPage(page + 1);
          }}
        />
      </div>
      <AddButton createNote={createNote} />
    </div>
  );
};

export default Index;
