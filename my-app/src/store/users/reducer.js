import {
    SET_ERROR,
    SET_LOADING,
    SET_USERS,
    ADD_USER,
    SET_ISAUTH,
    RESET_USER,
    ADD_LIKE
  } from "./actions";

  const initialState = {
    isError: false,
    isLoading: false,
    users: [],
    user: {},
    isAuth: true, 
    like: false
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

      case RESET_USER: {
        return { ...state, user: {} };
      }

      case ADD_LIKE: {
       // return { ...state, like: action.payload };
       const prevUser = state.users;

          const targetIndex = prevUser.findIndex((item) => item.id === action.payload.userId)

          if(targetIndex === -1) {
            return state;
          }

          const copyUsers = [...state.users]
          copyUsers[targetIndex] = {
            ...copyUsers[targetIndex],
            like: action.payload.status,
          }

          return {
            ...state,
            users: copyUsers
          }
      }
  
      default: {
        return state;
      }
    }
  };