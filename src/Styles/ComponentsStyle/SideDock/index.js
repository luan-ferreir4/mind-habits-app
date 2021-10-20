import styled from "styled-components";

export const SideDockStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: var(--green-pallet-four);
  color: #000;

  height: 100vh;
  width: auto;

  font-family: var(--font-type-formal);

  img {
    margin-top: 100px;
    height: auto;
  }

  button {
    width: 75vw;
    font-family: var(--font-type-formal);
    font-size: 19px;
    background-color: #60b948;
    color: #ffff;
    border: none;
    border-radius: 10px;
    margin-top: 25px;
    padding: 5px;
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
    width: 25%;

    button {
      height: 5vh;
      width: 20vw;
      text-align: center;
      margin-top: 35px;
    }
  }
`;
