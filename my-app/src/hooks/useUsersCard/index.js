import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addLike } from "../../store/users/actions";

export const useUsersCard = (id, like) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const favorite = localStorage.getItem(`like on id${id}`)
    if(favorite !== null) {
      dispatch(addLike(id, true));
    }
  }, [like])

  const getLike = (event) => {
    event.preventDefault();
    dispatch(addLike(id, !like));
    if(like) {
      localStorage.removeItem(`like on id${id}`)
    }else {
      localStorage.setItem(`like on id${id}`, like)
    }
  };
  return [getLike];
};
