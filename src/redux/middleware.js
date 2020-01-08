import {
  saveToken,
  setError,
  setLoading,
  updateSearchResults,
  setActive,
  setProfile
} from "./actions";
import { searchResultDummies, profileDummies } from "./dummies";

export function fetchToken(data) {
  return dispatch => {
    dispatch(setLoading(true));
    if (data.email === "budi@gmail.com" && data.password === "rahasia") {
      dispatch(setError(""));
      dispatch(saveToken("123456789"));
    } else {
      dispatch(setError("Email atau password salah"));
    }
    dispatch(setLoading(false));
  };
}

export function fetchSearchResults(data) {
  const dummy = searchResultDummies;
  return dispatch => {
    dispatch(setLoading(true));
    dispatch(updateSearchResults(dummy));
    dispatch(setActive(dummy[0]));
    dispatch(setLoading(false));
  };
}

export function fetchProfile(data) {
  const dummy = profileDummies;
  return dispatch => {
    dispatch(setLoading(true));
    dispatch(setProfile(dummy));
    dispatch(setLoading(false));
  };
}
