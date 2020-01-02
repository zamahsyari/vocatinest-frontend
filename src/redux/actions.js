export const SAVE_TOKEN = "SAVE_TOKEN";
export const SET_ERROR = "SET_ERROR";
export const SET_LOADING = "SET_LOADING";

export function saveToken(token) {
  return { type: SAVE_TOKEN, payload: token };
}

export function setError(error) {
  return { type: SET_ERROR, payload: error };
}

export function setLoading(val) {
  return { type: SET_LOADING, payload: val };
}
