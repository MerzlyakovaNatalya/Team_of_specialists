import axios from "axios";

export const SET_USERS = "SET_USERS";
export const SET_ERROR = "SET_ERROR";
export const SET_LOADING = "SET_LOADING";
export const SET_ISAUTH = "SET_ISAUTH";
export const ADD_USER = "ADD_USER";
export const RESET_USER = "RESET_USER";
export const RESET_USERS = "RESET_USERS";
export const ADD_LIKE = "ADD_LIKE";

export const setUsers = (users) => ({
  type: SET_USERS,
  payload: users,
});

export const setError = (status) => ({
  type: SET_ERROR,
  payload: status,
});

export const setLoading = (status) => ({
  type: SET_LOADING,
  payload: status,
});

export const setIsAuth = (status) => ({
  type: SET_ISAUTH,
  payload: status,
});

export const addUser = (user) => ({
  type: ADD_USER,
  payload: user,
});

export const reset = () => ({
  type: RESET_USER,
});

export const resetUsers = () => ({
  type: RESET_USERS,
});

export const addLike = (userId, status) => ({
  type: ADD_LIKE,
  payload: {
    userId,
    status,
  },
});

export const getUsers = async (dispatch) => {
  dispatch(setLoading(true));
  dispatch(setError(false));

  try {
    const response = await axios.get("https://reqres.in/api/users");
    const responseSecond = await axios.get("https://reqres.in/api/users?page=2");
    const copyResponse = [...response.data.data, ...responseSecond.data.data];
     const editedeRsponse = copyResponse.map((item) => {
       return { ...item, like: false };
     });
    dispatch(setUsers(editedeRsponse));
  } catch (error) {
    dispatch(setError(true));
    console.error(error);
  }
  dispatch(setLoading(false));
};

export const getRegisteredUser = (email, password) => async (dispatch) => {
  email = "eve.holt@reqres.in";
  password = "pistol";
  try {
    const response = await axios.post("https://reqres.in/api/register", {
      email: email,
      password: password,
    });
    localStorage.setItem("token_auth", response.data.token);
    dispatch(addUser(response.data));
  } catch (error) {
    console.error(error);
  }
};
