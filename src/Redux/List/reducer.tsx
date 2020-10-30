import * as ActionTypes from "./constant";

let initialState = {
  payload: [],
  searchList: [],
  loading: false,
  error: null,
  total: null,
};

const listReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.REQUEST:
      return { ...state, loading: true };

    case ActionTypes.GET_LIST:
      state.total = action.total;
      state.searchList = action.payload;
      return {
        ...state,
        loading: false,
        payload: [...state.payload, ...action.payload],
      };

    case ActionTypes.CREATE_LIST:
      return {
        ...state,
        loading: false,
        payload: [...state.payload, action.payload],
      };

    case ActionTypes.EDIT_LIST:
      const newList = state.payload.map((list: any, index: number) => {
        if (list.id === action.payload.id) {
          return {
            ...list,
            name: action.payload.name,
            description: action.payload.description,
            isDone: action.payload.isDone,
          };
        }
        return list;
      });
      return {
        ...state,
        payload: newList,
        loading: false,
      };

    case ActionTypes.DELETE_LIST:
      let position = -1;
      state.payload.map((note: any, index: number) => {
        if (note.id === action.payload) {
          position = index;
        }
        return position;
      });
      state.payload.splice(position, 1);

      return {
        ...state,
        loading: false,
      };
    default:
      return { ...state };
  }
};

export default listReducer;
