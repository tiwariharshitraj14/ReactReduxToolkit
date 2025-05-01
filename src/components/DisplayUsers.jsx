import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { MdDeleteForever } from "react-icons/md";
import { removeUser } from "../store/slices/UserSlice";

const DisplayUsers = () => {
  const data = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const deleteSingleUser = (id) => {
    dispatch(removeUser(id));
  };

  return (
    <Wrapper>
      <ul>
        {data.map((user, index) => (
          <li key={index}>
            {user}
            <button className="btn-delete" onClick={() => deleteSingleUser(index)}>
              <MdDeleteForever className="delete-icon" />
            </button>
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.6rem;
    padding: 0.8rem 1.2rem;
    border-bottom: 1px solid rgb(189, 188, 188);
    margin-bottom: 0.8rem;
    border-radius: 0.4rem;
  }
  .btn-delete {
    background: transparent;
    border: none;
    cursor: pointer;
  }
`;

export default DisplayUsers;
