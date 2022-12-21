import {
    SET_ERROR,
    SET_LOADING,
    SET_USERS,
    RESET,
  } from "./actions";

  const initialState = {
    isError: false,
    isLoading: false,
    users: [],
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
  
      case RESET: {
        return state; //Always return the initial state
      }
  
      default: {
        return state;
      }
    }
  };