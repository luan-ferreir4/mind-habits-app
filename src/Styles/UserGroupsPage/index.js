import styled, { keyframes } from "styled-components";

export const UserGroupsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: var(--green-pallet-four);
  color: #000;

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: start;
  }
`;

export const UserGroupMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 20px;

  height: 100vh;
  width: 25vw;

  font-family: var(--font-type-formal);

  button {
    height: 100vh;
    width: 75vw;
    font-family: var(--font-type-formal);
    font-size: 19px;
    background-color: #60b948;
    color: #ffff;
    border: none;
    border-radius: 10px;
    margin-top: 25px;
    cursor: pointer;
  }

  button:hover {
    background-color: #84c67c;
  }

  div {
    font-family: var(--font-type-details: "Saira");
    font-size: 35px;
  }

  @media (min-width: 1024px) {
    button {
      height: 5vh;
      width: 75%;
      text-align: center;
      font-family: var(--font-type-formal);
      font-size: 19px;
      margin-top: 15px;
    }
  }
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-start: start;

  height: auto;
  width: 75vw;

  background-color: #f5f5f5;
  color: #000;

  h3 {
    font-family: var(--font-type-details: "Saira");
    font-size: 60px;
    margin-top: 35px;
    margin-bottom: 35px;
    text-align: center;
  }

  .CardMyGroup {
    background-color: #84c67c;
    border-radius: 30px;
    margin: 10px;
    padding: 35px;
    padding-left: 35px;
  }

  .CardMyGroup:hover {
      cursor: pointer;
      background-color: #60B948;
  }
`;
