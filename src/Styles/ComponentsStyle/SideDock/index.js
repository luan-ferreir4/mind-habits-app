import styled from "styled-components";

export const SideDockStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: var(--green-pallet-four);
  color: #000;

  height: 100%;
  width: auto;

  font-family: var(--font-type-formal);

  img {
    margin-top: 45px;
    height: auto;
  }

  button {
    width: 50%;
    font-family: var(--font-type-details);
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
    font-family: var(--font-type-details);
    font-size: 35px;
  }

  @media (min-width: 1024px) {
    width: 23vw;
    button {
      width: 56%;
      font-size: var(--font-size-small);
    }
  }
`;
