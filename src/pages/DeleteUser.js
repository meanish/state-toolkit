import styled from "styled-components";
import { useDispatch } from "react-redux";
import { removeAll } from "../store/actions/index";

const DeleteAllUser = () => {
  const dispatch = useDispatch();

  const deleteUsers = () => {
    dispatch(removeAll());
  };

  return (
    <Wrapper>
      <button className="btn clear-btn" onClick={deleteUsers}>
        clear All
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .clear-btn {
    text-transform: capitalize;
    background-color: green;
    margin-top: 2rem;
    color: #eee;
  }
`;

export default DeleteAllUser;
