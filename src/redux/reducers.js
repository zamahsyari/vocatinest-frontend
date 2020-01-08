import {
  SAVE_TOKEN,
  SET_ERROR,
  SET_LOADING,
  UPDATE_SEARCH_RESULTS,
  SET_ACTIVE,
  SET_PROFILE
} from "./actions";

const initialState = {
  token: "",
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

export function searchResultsReducer(state = initialSearchResults, action) {
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
}

export function profileReducer(state = initialProfile, action) {
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
}
