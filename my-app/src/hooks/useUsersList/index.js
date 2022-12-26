import { useDispatch, useSelector } from "react-redux";
import { getUsers, setIsAuth, reset } from "../../store/users/actions";
import {
  getUsersData,
  getError,
  getLoading,
  getIsAuth,
} from "../../store/users/selectors";
import { useEffect } from "react";

export const useUsersList = () => {
  const isAuth = useSelector(getIsAuth);
  const users = useSelector(getUsersData);
  const error = useSelector(getError);
  const loading = useSelector(getLoading);
  const dispatch = useDispatch();

  const getExit = () => {
    localStorage.removeItem("token_auth");
    dispatch(setIsAuth(true));
    dispatch(reset());
  };

  useEffect(() => {
    dispatch(getUsers);
  }, []);

  return [loading, error, users, isAuth, getExit];
};
