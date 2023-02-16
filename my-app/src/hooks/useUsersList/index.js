import { useDispatch, useSelector } from "react-redux";
import { getUsers, setIsAuth, reset, addUser, resetUsers } from "../../store/users/actions";
import {
  getUsersData,
  getError,
  getLoading,
  getIsAuth,
  getUser,
} from "../../store/users/selectors";
import { useEffect, useState } from "react";
import { getIsModel } from "../../store/isModel/selectors";
import { setModel } from "../../store/isModel/actions";

export const useUsersList = () => {
  const isAuth = useSelector(getIsAuth);
  const isModel = useSelector(getIsModel);
  const user = useSelector(getUser);
  const users = useSelector(getUsersData);
  const error = useSelector(getError);
  const loading = useSelector(getLoading);
  const [ isAllUsers, setIsAllUsers] = useState(false)
  const dispatch = useDispatch();

  const getLoginOrExit = () => {
    if (isAuth) {
      localStorage.removeItem("token_auth");
      localStorage.removeItem("user");
      dispatch(setIsAuth(false));
      dispatch(reset());
      dispatch(resetUsers());
    } else {
      dispatch(setModel(true));
    }
  };

  const getCountUsers = () => {
    setIsAllUsers(true)
  }

  useEffect(() => {
    dispatch(getUsers);
  }, [isAuth]);

  useEffect(() => {
    if (localStorage.getItem("token_auth")) {
      dispatch(setIsAuth(true));
    }
    if (user?.id) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      const storageUser = localStorage.getItem("user");
      dispatch(addUser(JSON.parse(storageUser)));
    }
  }, [user]);

  return [loading, error, users, isAuth, isModel, isAllUsers, getCountUsers, getLoginOrExit];
};
