import { useDispatch } from "react-redux";
import { clearUsers } from "../store/slices/UserSlice";

const DeleteAllUser = () => {
  const dispatch = useDispatch();
  const clearAllUser = () => {
    dispatch(clearUsers())
  }
  return (
    <>
      <div onClick={() => clearAllUser()}>DeleteAllUser</div>
    </>
  );
};

export default DeleteAllUser;
