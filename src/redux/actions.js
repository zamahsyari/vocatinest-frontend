export const SAVE_TOKEN = "SAVE_TOKEN";
export const SET_ERROR = "SET_ERROR";
export const SET_LOADING = "SET_LOADING";
export const UPDATE_SEARCH_RESULTS = "UPDATE_SEARCH_RESULTS";
export const SET_ACTIVE = "SET_ACTIVE";
export const SET_PROFILE = "SET_PROFILE";

export function saveToken(token) {
  return { type: SAVE_TOKEN, payload: token };
}

export function setError(error) {
  return { type: SET_ERROR, payload: error };
}

export function setLoading(val) {
  return { type: SET_LOADING, payload: val };
}

export function updateSearchResults(error) {
  return { type: UPDATE_SEARCH_RESULTS, payload: error };
}

export function setActive(data) {
  return { type: SET_ACTIVE, payload: data };
}

export function setProfile(data) {
  return { type: SET_PROFILE, payload: data };
}
