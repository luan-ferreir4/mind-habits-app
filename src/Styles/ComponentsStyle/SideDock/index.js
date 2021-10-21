import styled from "styled-components";

export const SideDockStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

padding: 30px 0 ;

  background-color: #f5f5f5;
  color: #000;

  width: auto;
  font-family: var(--font-type-formal);

  img {
    width: 100px;
  }

  button {
    width: 160px;
    max-width: 200px;
    height: 40px;
    font-family: var(--font-type-details);
    font-size: 19px;
    background-color: #60b948;
    color: #ffff;
    border: none;
    border-radius: 10px;
    margin-top: 15px;
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
    height: 90vh;
    width: 23vw;
    button {
      height: 46px;
      font-size: var(--font-size-small);
    }
  }
`;
