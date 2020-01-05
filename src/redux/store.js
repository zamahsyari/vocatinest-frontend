import { createStore } from "redux";
import { authReducer } from "./reducers";
import thunk from "redux-thunk";
import { applyMiddleware } from "redux";
import { compose } from "redux";
import { combineReducers } from "redux";

const store = createStore(
  combineReducers({ auth: authReducer }),
  // compose(
  //   applyMiddleware(thunk),
  //   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  // )
  applyMiddleware(thunk)
);

export default store;
