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
  deselectImportant,
  setCharacterTests,
  answerCharacterTest,
  setActiveCharacterTest,
  setSchools,
  setSchoolSpecialization
} from "./actions";
import {
  searchResultDummies,
  profileDummies,
  jobCategoriesDummies,
  professionDummies,
  jobKindDummies,
  companyKindDummies,
  importantDummies,
  characterTestDummies
} from "./dummies";
import axios from "axios";

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
  return dispatch => {
    axios
      .get(
        `${process.env.REACT_APP_CORS}/${process.env.REACT_APP_BASE_URL}/job_categories`
      )
      .then(data => {
        dispatch(
          setJobCategories(
            data.data.data.map(item => {
              return {
                id: item.id,
                title: item.category
              };
            })
          )
        );
      });
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

const fetchJobByCategoryId = async id => {
  let resp = await axios.get(
    `${process.env.REACT_APP_CORS}/${process.env.REACT_APP_BASE_URL}/jobs/category/${id}`
  );
  return resp.data.data;
};

export const fetchProfessions = data => {
  return async dispatch => {
    let combined = [];
    for (let i = 0; i < data.length; i++) {
      let resp = await fetchJobByCategoryId(data[i].id);
      for (let j = 0; j < resp.length; j++) {
        let item = {
          id: resp[j].id,
          title: resp[j].name
        };
        combined.push(item);
      }
    }
    dispatch(setProfesions(combined));
  };
};

export const nextAndGetProfession = (data, target) => {
  return dispatch => {
    dispatch(fetchProfessions(data));
    dispatch(updateActiveJobAspiration(target));
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
  return async dispatch => {
    let resp = await axios.get(
      `${process.env.REACT_APP_CORS}/${process.env.REACT_APP_BASE_URL}/job_kinds`
    );
    dispatch(setLoading(true));
    dispatch(
      setJobKinds(
        resp.data.data.map(item => {
          return {
            id: item.id,
            title: item.kind
          };
        })
      )
    );
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
  return async dispatch => {
    let resp = await axios.get(
      `${process.env.REACT_APP_CORS}/${process.env.REACT_APP_BASE_URL}/company_categories`
    );
    dispatch(setLoading(true));
    dispatch(
      setCompanyKinds(
        resp.data.data.map(item => {
          return {
            id: item.id,
            title: item.category
          };
        })
      )
    );
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

export const fetchCharacterTests = data => {
  return async dispatch => {
    let resp = await axios.get(
      `${process.env.REACT_APP_CORS}/${process.env.REACT_APP_BASE_URL}/character_tests`
    );
    dispatch(setLoading(true));
    dispatch(
      setCharacterTests(
        resp.data.data.map(item => {
          return {
            id: item.id,
            title: item.question,
            answer: 0
          };
        })
      )
    );
    dispatch(setLoading(false));
  };
};

export const ansCharacterTest = data => {
  return dispatch => {
    dispatch(answerCharacterTest(data));
  };
};

export const updateActiveCharacterTest = data => {
  return dispatch => {
    dispatch(setLoading(true));
    dispatch(setActiveCharacterTest(data));
    dispatch(setLoading(false));
  };
};

export const register = data => {
  return axios
    .post(
      `${process.env.REACT_APP_CORS}/${process.env.REACT_APP_BASE_URL}/register`,
      {
        email: data.email,
        name: data.name,
        password: data.password,
        role_id: 1
      },
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    )
    .then(data => {
      return data;
    })
    .catch(error => {
      console.log(error);
      return false;
    });
};

export const login = data => {
  return dispatch => {
    return axios
      .post(
        `${process.env.REACT_APP_CORS}/${process.env.REACT_APP_BASE_URL}/login`,
        {
          email: data.email,
          password: data.password
        },
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      )
      .then(data => {
        dispatch(saveToken(data.data.data.token));
        localStorage.setItem("user_id", data.data.data.user_id);
        return true;
      })
      .catch(error => {
        dispatch(setError(error.response.data.message));
        return false;
      });
  };
};

export const fetchSchools = data => {
  return async dispatch => {
    let resp = await axios.get(
      `${process.env.REACT_APP_CORS}/${process.env.REACT_APP_BASE_URL}/schools`
    );
    dispatch(setLoading(true));
    dispatch(
      setSchools(
        resp.data.data.map(item => {
          return {
            id: item.id,
            title: `${item.name} ${item.city}`,
            specializations: item.specialization
          };
        })
      )
    );
    dispatch(setLoading(false));
  };
};

export const fetchSpecialization = (id, data) => {
  let specializations = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].id === parseInt(id)) {
      let str = data[i].specializations;
      specializations = str.split(",");
      break;
    }
  }
  return dispatch => {
    dispatch(setSchoolSpecialization(specializations));
  };
};

export const submitProfile = data => {
  return async dispatch => {
    console.log("dispatching");
    axios
      .post(
        `${process.env.REACT_APP_CORS}/${process.env.REACT_APP_BASE_URL}/profiles`,
        data,
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      )
      .then(data => {
        return true;
      })
      .catch(error => {
        dispatch(setError(error.response.data));
        return false;
      });
  };
};
