import { combineReducers } from "redux";

import listReducer from "./List/reducer";

const rootReducer = combineReducers({ listReducer });

export default rootReducer;
