import { combineReducers } from "redux";

import searchReducer, { IState as SearchState } from "./search.reducer";

const rootReducer = combineReducers({
  searchReducer,
});

export type AppRootReducer = {
  searchReducer: SearchState;
};

export default rootReducer;
