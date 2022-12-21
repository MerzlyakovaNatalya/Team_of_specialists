import axios from "axios";

export const SET_USERS = "SET_USERS";
export const SET_ERROR = "SET_ERROR";
export const SET_LOADING = "SET_LOADING";
export const RESET = "RESET";


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

  export const getUsers = async (dispatch) => {
    dispatch(setLoading(true));
    dispatch(setError(false));

    try {
      const response = await axios.get('https://reqres.in/api/users?page=2');
      console.log(response.data.data);
      dispatch(setUsers(response.data.data));
    } catch (error) {
        dispatch(setError(true));
      console.error(error);
    }
    dispatch(setLoading(false));
  }

