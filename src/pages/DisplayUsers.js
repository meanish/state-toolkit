import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { removeUser } from "../store/slices/userSlices";

const DisplayUsers = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => {
    //access of store in array
    return state.users;
  });

  const deleteUser = (payload) => {
    dispatch(removeUser(payload));
  };

  return (
    <Wrapper>
      {data.map((user, id) => {
        return (
          <li key={id}>
            {user}
            <button onClick={() => deleteUser(id)}>Delete</button>
          </li>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  li {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    border-bottom: 1px solid #eee;
    color: red;

    &:first-child {
      border-top: 1px solid #eee;
    }
  }

  .btn-delete {
    background-color: transparent;
    border: 0;
    color: #fff;
  }
`;
export default DisplayUsers;
