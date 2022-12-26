import { useDispatch } from "react-redux";
import { addLike } from "../../store/users/actions";

export const useUsersCard = (id, like) => {
  const dispatch = useDispatch();

  const getLike = (event) => {
    dispatch(addLike(id, !like));
    event.preventDefault();
  };
  return [getLike];
};
