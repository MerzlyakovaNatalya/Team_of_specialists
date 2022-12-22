import {
    SET_ERROR,
    SET_LOADING,
    SET_USERS,
    RESET,
    ADD_USER,
    SET_ISAUTH
  } from "./actions";

  const initialState = {
    isError: false,
    isLoading: false,
    users: [],
    user: {},
    isAuth: false
  };

  export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_LOADING: {
        return { ...state, isLoading: action.payload };
      }
  
      case SET_ERROR: {
        return { ...state, isError: action.payload };
      }
  
      case SET_USERS: {
        return { ...state, users: action.payload };
      }

      case SET_ISAUTH: {
        return { ...state, isAuth: action.payload };
      }

      case ADD_USER: {
        return { ...state, user: action.payload };
      }
  
      case RESET: {
        return state; //Always return the initial state
      }
  
      default: {
        return state;
      }
    }
  };