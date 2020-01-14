export const SAVE_TOKEN = "SAVE_TOKEN";
export const SET_ERROR = "SET_ERROR";
export const SET_LOADING = "SET_LOADING";
export const UPDATE_SEARCH_RESULTS = "UPDATE_SEARCH_RESULTS";
export const SET_ACTIVE = "SET_ACTIVE";
export const SET_PROFILE = "SET_PROFILE";
export const SET_ACTIVE_JOB_ASPIRATION = "SET_ACTIVE_JOB_ASPIRATION";
export const SET_CHARACTER_TESTS = "SET_CHARACTER_TESTS";
export const ANSWER_CHARACTER_TEST = "ANSWER_CHARACTER_TEST";
export const SET_ACTIVE_CHARACTER_TEST = "SET_ACTIVE_CHARACTER_TEST";
export const SET_SCHOOLS = "SET_SCHOOLS";
export const SET_SCHOOL_SPECIALIZATION = "SET_SCHOOL_SPECIALIZATION";
// multiple options
export const SET_DATA = "SET_DATA";
export const SELECT_ITEM = "SELECT_ITEM";
export const DESELECT_ITEM = "DESELECT_ITEM";
// IDs
export const ID_JOB_CATEGORY = "_JOB_CATEGORY";
export const ID_PROFESSION = "_PROFESSION";
export const ID_JOB_KIND = "_JOB_KIND";
export const ID_COMPANY_KIND = "_COMPANY_KIND";
export const ID_IMPORTANT = "_IMPORTANT";

export const saveToken = token => {
  return { type: SAVE_TOKEN, payload: token };
};

export const setError = error => {
  return { type: SET_ERROR, payload: error };
};

export const setLoading = val => {
  return { type: SET_LOADING, payload: val };
};

export const updateSearchResults = error => {
  return { type: UPDATE_SEARCH_RESULTS, payload: error };
};

export const setActive = data => {
  return { type: SET_ACTIVE, payload: data };
};

export const setProfile = data => {
  return { type: SET_PROFILE, payload: data };
};

export const setActiveJobAspiration = data => {
  return { type: SET_ACTIVE_JOB_ASPIRATION, payload: data };
};

// job categories
export const setJobCategories = data => {
  return { type: SET_DATA + ID_JOB_CATEGORY, payload: data };
};

export const selectJobCategory = data => {
  return { type: SELECT_ITEM + ID_JOB_CATEGORY, payload: data };
};

export const deselectJobCategory = data => {
  return { type: DESELECT_ITEM + ID_JOB_CATEGORY, payload: data };
};
// professions
export const setProfesions = data => {
  return { type: SET_DATA + ID_PROFESSION, payload: data };
};

export const selectProfession = data => {
  return { type: SELECT_ITEM + ID_PROFESSION, payload: data };
};

export const deselectProfession = data => {
  return { type: DESELECT_ITEM + ID_PROFESSION, payload: data };
};
// job kind
export const setJobKinds = data => {
  return { type: SET_DATA + ID_JOB_KIND, payload: data };
};

export const selectJobKind = data => {
  return { type: SELECT_ITEM + ID_JOB_KIND, payload: data };
};

export const deselectJobKind = data => {
  return { type: DESELECT_ITEM + ID_JOB_KIND, payload: data };
};
// company kind
export const setCompanyKinds = data => {
  return { type: SET_DATA + ID_COMPANY_KIND, payload: data };
};

export const selectCompanyKind = data => {
  return { type: SELECT_ITEM + ID_COMPANY_KIND, payload: data };
};

export const deselectCompanyKind = data => {
  return { type: DESELECT_ITEM + ID_COMPANY_KIND, payload: data };
};
// important
export const setImportants = data => {
  return { type: SET_DATA + ID_IMPORTANT, payload: data };
};

export const selectImportant = data => {
  return { type: SELECT_ITEM + ID_IMPORTANT, payload: data };
};

export const deselectImportant = data => {
  return { type: DESELECT_ITEM + ID_IMPORTANT, payload: data };
};

export const setCharacterTests = data => {
  return { type: SET_CHARACTER_TESTS, payload: data };
};

export const answerCharacterTest = data => {
  return { type: ANSWER_CHARACTER_TEST, payload: data };
};

export const setActiveCharacterTest = data => {
  return { type: SET_ACTIVE_CHARACTER_TEST, payload: data };
};

export const setSchools = data => {
  return { type: SET_SCHOOLS, payload: data };
};

export const setSchoolSpecialization = data => {
  return { type: SET_SCHOOL_SPECIALIZATION, payload: data };
};
