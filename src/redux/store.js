import { createStore } from "redux";
import {
  authReducer,
  searchResultsReducer,
  profileReducer,
  jobCategoriesReducer,
  professionReducer,
  jobKindReducer,
  companyKindReducer,
  importantReducer,
  jobAspirationReducer,
  characterTestReducer,
  schoolReducer
} from "./reducers";
import thunk from "redux-thunk";
import { applyMiddleware } from "redux";
import { compose } from "redux";
import { combineReducers } from "redux";

const store = createStore(
  combineReducers({
    auth: authReducer,
    searchResults: searchResultsReducer,
    profile: profileReducer,
    jobAspiration: jobAspirationReducer,
    jobCategories: jobCategoriesReducer,
    professions: professionReducer,
    jobKinds: jobKindReducer,
    companyKinds: companyKindReducer,
    importants: importantReducer,
    characters: characterTestReducer,
    schools: schoolReducer
  }),
  compose(
    applyMiddleware(thunk)
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
