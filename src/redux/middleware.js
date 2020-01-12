import {
  saveToken,
  setError,
  setLoading,
  updateSearchResults,
  setActive,
  setProfile,
  setActiveJobAspiration,
  setJobCategories,
  selectJobCategory,
  deselectJobCategory,
  setProfesions,
  selectProfession,
  deselectProfession,
  setJobKinds,
  selectJobKind,
  deselectJobKind,
  setCompanyKinds,
  selectCompanyKind,
  deselectCompanyKind,
  setImportants,
  selectImportant,
  deselectImportant
} from "./actions";
import {
  searchResultDummies,
  profileDummies,
  jobCategoriesDummies,
  professionDummies,
  jobKindDummies,
  companyKindDummies,
  importantDummies
} from "./dummies";

export const fetchToken = data => {
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
};

export const fetchSearchResults = data => {
  const dummy = searchResultDummies;
  return dispatch => {
    dispatch(setLoading(true));
    dispatch(updateSearchResults(dummy));
    dispatch(setActive(dummy[0]));
    dispatch(setLoading(false));
  };
};

export const fetchProfile = data => {
  const dummy = profileDummies;
  return dispatch => {
    dispatch(setLoading(true));
    dispatch(setProfile(dummy));
    dispatch(setLoading(false));
  };
};

export const updateActiveJobAspiration = data => {
  return dispatch => {
    dispatch(setLoading(true));
    dispatch(setActiveJobAspiration(data));
    dispatch(setLoading(false));
  };
};

export const fetchJobCategories = data => {
  const dummy = jobCategoriesDummies;
  return dispatch => {
    dispatch(setLoading(true));
    dispatch(setJobCategories(dummy));
    dispatch(setLoading(false));
  };
};

export const setJobCategory = data => {
  return dispatch => {
    dispatch(selectJobCategory(data));
  };
};

export const unsetJobCategory = data => {
  return dispatch => {
    dispatch(deselectJobCategory(data));
  };
};

export const fetchProfessions = data => {
  const dummy = professionDummies;
  return dispatch => {
    dispatch(setLoading(true));
    dispatch(setProfesions(dummy));
    dispatch(setLoading(false));
  };
};

export const setProfession = data => {
  return dispatch => {
    dispatch(selectProfession(data));
  };
};

export const unsetProfession = data => {
  return dispatch => {
    dispatch(deselectProfession(data));
  };
};

export const fetchJobKinds = data => {
  const dummy = jobKindDummies;
  return dispatch => {
    dispatch(setLoading(true));
    dispatch(setJobKinds(dummy));
    dispatch(setLoading(false));
  };
};

export const setJobKind = data => {
  return dispatch => {
    dispatch(selectJobKind(data));
  };
};

export const unsetJobKind = data => {
  return dispatch => {
    dispatch(deselectJobKind(data));
  };
};

export const fetchCompanyKinds = data => {
  const dummy = companyKindDummies;
  return dispatch => {
    dispatch(setLoading(true));
    dispatch(setCompanyKinds(dummy));
    dispatch(setLoading(false));
  };
};

export const setCompanyKind = data => {
  return dispatch => {
    dispatch(selectCompanyKind(data));
  };
};

export const unsetCompanyKind = data => {
  return dispatch => {
    dispatch(deselectCompanyKind(data));
  };
};

export const fetchImportants = data => {
  const dummy = importantDummies;
  return dispatch => {
    dispatch(setLoading(true));
    dispatch(setImportants(dummy));
    dispatch(setLoading(false));
  };
};

export const setImportant = data => {
  return dispatch => {
    dispatch(selectImportant(data));
  };
};

export const unsetImportant = data => {
  return dispatch => {
    dispatch(deselectImportant(data));
  };
};
