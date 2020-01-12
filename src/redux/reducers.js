import {
  SAVE_TOKEN,
  SET_ERROR,
  SET_LOADING,
  UPDATE_SEARCH_RESULTS,
  SET_ACTIVE,
  SET_PROFILE,
  SET_ACTIVE_JOB_ASPIRATION,
  SET_DATA,
  SELECT_ITEM,
  DESELECT_ITEM,
  ID_JOB_CATEGORY,
  ID_PROFESSION,
  ID_JOB_KIND,
  ID_COMPANY_KIND,
  ID_IMPORTANT
} from "./actions";

const initialState = {
  token: "",
  error: "",
  loading: false
};

const initialJobAspiration = {
  active: 1,
  error: "",
  loading: false
};

const initialSearchResults = {
  data: [],
  active: {
    id: 0,
    title: "",
    company: "",
    location: "",
    image: "",
    posted_at: "",
    excerpt: "",
    descriptions: [],
    conditions: [],
    guides: [],
    level: "",
    views: 0,
    skills: []
  },
  error: "",
  loading: false
};

const initialProfile = {
  data: {
    name: "",
    description: "",
    job_tags: [],
    job_vacancies: [],
    job_trends: [],
    educations: [],
    location: "",
    organizations: [],
    achievements: []
  },
  error: "",
  loading: false
};

const initialJobCategories = {
  data: [],
  error: "",
  loading: false,
  selected: []
};

const initialProfessions = {
  data: [],
  error: "",
  loading: false,
  selected: []
};

const initialJobKinds = {
  data: [],
  error: "",
  loading: false,
  selected: []
};

const initialCompanyKinds = {
  data: [],
  error: "",
  loading: false,
  selected: []
};

const initialImportants = {
  data: [],
  error: "",
  loading: false,
  selected: []
};

export const authReducer = (state = initialState, action) => {
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
};

export const searchResultsReducer = (state = initialSearchResults, action) => {
  switch (action.type) {
    case UPDATE_SEARCH_RESULTS:
      return Object.assign({}, state, {
        data: action.payload
      });
    case SET_ERROR:
      return Object.assign({}, state, {
        error: action.payload
      });
    case SET_LOADING:
      return Object.assign({}, state, {
        loading: action.payload
      });
    case SET_ACTIVE:
      return Object.assign({}, state, {
        active: action.payload
      });
    default:
      return state;
  }
};

export const profileReducer = (state = initialProfile, action) => {
  switch (action.type) {
    case SET_PROFILE:
      return Object.assign({}, state, {
        data: action.payload
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
};

export const jobAspirationReducer = (state = initialJobAspiration, action) => {
  switch (action.type) {
    case SET_ACTIVE_JOB_ASPIRATION:
      return Object.assign({}, state, {
        active: action.payload
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
};

export const jobCategoriesReducer = (state = initialJobCategories, action) => {
  switch (action.type) {
    case SET_DATA + ID_JOB_CATEGORY:
      return Object.assign({}, state, {
        data: action.payload
      });
    case SET_ERROR:
      return Object.assign({}, state, {
        error: action.payload
      });
    case SET_LOADING:
      return Object.assign({}, state, {
        loading: action.payload
      });
    case SELECT_ITEM + ID_JOB_CATEGORY:
      if (state.selected.length < 3) {
        return {
          ...state,
          selected: state.selected.concat(action.payload)
        };
      } else {
        return state;
      }
    case DESELECT_ITEM + ID_JOB_CATEGORY:
      return Object.assign({}, state, {
        selected: state.selected.filter(item => {
          return item !== action.payload;
        })
      });
    default:
      return state;
  }
};

export const professionReducer = (state = initialProfessions, action) => {
  switch (action.type) {
    case SET_DATA + ID_PROFESSION:
      return Object.assign({}, state, {
        data: action.payload
      });
    case SET_ERROR:
      return Object.assign({}, state, {
        error: action.payload
      });
    case SET_LOADING:
      return Object.assign({}, state, {
        loading: action.payload
      });
    case SELECT_ITEM + ID_PROFESSION:
      if (state.selected.length < 3) {
        return {
          ...state,
          selected: state.selected.concat(action.payload)
        };
      } else {
        return state;
      }
    case DESELECT_ITEM + ID_PROFESSION:
      return Object.assign({}, state, {
        selected: state.selected.filter(item => {
          return item !== action.payload;
        })
      });
    default:
      return state;
  }
};

export const jobKindReducer = (state = initialJobKinds, action) => {
  switch (action.type) {
    case SET_DATA + ID_JOB_KIND:
      return Object.assign({}, state, {
        data: action.payload
      });
    case SET_ERROR:
      return Object.assign({}, state, {
        error: action.payload
      });
    case SET_LOADING:
      return Object.assign({}, state, {
        loading: action.payload
      });
    case SELECT_ITEM + ID_JOB_KIND:
      if (state.selected.length < 3) {
        return {
          ...state,
          selected: state.selected.concat(action.payload)
        };
      } else {
        return state;
      }
    case DESELECT_ITEM + ID_JOB_KIND:
      return Object.assign({}, state, {
        selected: state.selected.filter(item => {
          return item !== action.payload;
        })
      });
    default:
      return state;
  }
};

export const companyKindReducer = (state = initialCompanyKinds, action) => {
  switch (action.type) {
    case SET_DATA + ID_COMPANY_KIND:
      return Object.assign({}, state, {
        data: action.payload
      });
    case SET_ERROR:
      return Object.assign({}, state, {
        error: action.payload
      });
    case SET_LOADING:
      return Object.assign({}, state, {
        loading: action.payload
      });
    case SELECT_ITEM + ID_COMPANY_KIND:
      if (state.selected.length < 3) {
        return {
          ...state,
          selected: state.selected.concat(action.payload)
        };
      } else {
        return state;
      }
    case DESELECT_ITEM + ID_COMPANY_KIND:
      return Object.assign({}, state, {
        selected: state.selected.filter(item => {
          return item !== action.payload;
        })
      });
    default:
      return state;
  }
};

export const importantReducer = (state = initialImportants, action) => {
  switch (action.type) {
    case SET_DATA + ID_IMPORTANT:
      return Object.assign({}, state, {
        data: action.payload
      });
    case SET_ERROR:
      return Object.assign({}, state, {
        error: action.payload
      });
    case SET_LOADING:
      return Object.assign({}, state, {
        loading: action.payload
      });
    case SELECT_ITEM + ID_IMPORTANT:
      if (state.selected.length < 3) {
        return {
          ...state,
          selected: state.selected.concat(action.payload)
        };
      } else {
        return state;
      }
    case DESELECT_ITEM + ID_IMPORTANT:
      return Object.assign({}, state, {
        selected: state.selected.filter(item => {
          return item !== action.payload;
        })
      });
    default:
      return state;
  }
};
