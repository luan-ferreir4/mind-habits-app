import styled from "styled-components";

export const SideDockStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #f5f5f5;
  color: #000;

  height: 598px;
  width: auto;
  font-family: var(--font-type-formal);

  img {
    margin-top: 45px;
    height: 175px;
    width 175px;
  }

  button {
    width: 160px;
    height: 40px;
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
    background-color: var(--green-pallet-four);
    height: 100%;
    width: 23vw;
    button {
      width: 200px;
      height: 46px;
      font-size: var(--font-size-small);
    }

    img {
      margin-top: 45px;
    }
  }
`;
