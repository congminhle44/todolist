import { api } from "../../Config/api/baseUrl";
import { list } from "../../Config/api/list";

import * as ActionTypes from "./constant";

export const getList = (page: number, limit: number) => {
  return async (dispatch: any) => {
    dispatch({
      type: ActionTypes.REQUEST,
    });
    try {
      const payload = await api.get(`${list}?_page=${page}&_limit=${limit}`);

      const total = payload.headers["x-total-count"];

      dispatch({
        type: ActionTypes.GET_LIST,
        total,
        payload: payload.data,
      });
    } catch (error) {
      return error;
    }
  };
};

export const editList = (id: number, listObj: object) => {
  return async (dispatch: any) => {
    dispatch({
      type: ActionTypes.REQUEST,
    });
    try {
      const payload = await api.put(`${list}/${id}`, listObj);
      dispatch({
        type: ActionTypes.EDIT_LIST,
        payload: payload.data,
      });
    } catch (err) {
      return err;
    }
  };
};

export const deleteList = (id: number) => {
  return async (dispatch: any) => {
    dispatch({
      type: ActionTypes.REQUEST,
    });
    try {
      await api.delete(`${list}/${id}`);
      dispatch({
        type: ActionTypes.DELETE_LIST,
        payload: id,
      });
    } catch (err) {
      return err;
    }
  };
};
