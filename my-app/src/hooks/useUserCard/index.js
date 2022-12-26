import { useNavigate } from "react-router-dom";
import { getUsersData } from "../../store/users/selectors";
import { useDispatch, useSelector } from "react-redux";
import { setIsAuth, reset } from "../../store/users/actions";
import { useEffect, useState } from "react";

export const useUserCard = (userId) => {
  const [userFromStorage, setUserFromStorage] = useState("");
  const users = useSelector(getUsersData);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = users.find(({ id }) => id === Number(userId));

  const harkBack = () => {
    dispatch(setIsAuth(false));
    navigate(-1);
  };

  const getExit = () => {
    navigate("/");
    localStorage.removeItem("token_auth");
    dispatch(setIsAuth(true));
    dispatch(reset());
  };

  useEffect(() => {
    if (user !== undefined) {
      localStorage.setItem("user", JSON.stringify(user));
      setUserFromStorage(user);
    } else {
      const item = JSON.parse(localStorage.getItem("user"));
      setUserFromStorage(item);
    }
  }, []);

  return [userFromStorage, harkBack, getExit];
};
