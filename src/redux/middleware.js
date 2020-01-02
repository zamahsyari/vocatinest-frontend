import { saveToken, setError, setLoading } from "./actions";

export default function fetchToken(data) {
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
