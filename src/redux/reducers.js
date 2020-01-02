import { SAVE_TOKEN, SET_ERROR, SET_LOADING } from "./actions";

const initialState = {
  token: "",
  error: "",
  loading: false
};

export function authReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_TOKEN:
      return Object.assign({}, state, {
        token: action.payload
      });
    case SET_ERROR:
      return Object.assign({}, state, {
        error: action.payload
      });
    case SET_LOADING:
      return Object.assign({}, state, {
        loading: action.payload
      });
    default:
      return state;
  }
}
