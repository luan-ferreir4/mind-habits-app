import styled from "styled-components";

export const PageNavButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px 0;
  button {
    margin: 10px 15px;
    height: 50px;
    width: 150px;

    background-color: var(--green-pallet-one);
    color: #f5f5f5;

    font-family: var(--font-type-details);
    font-size: var(--font-size-small);

    border: none;
    border-radius: 10px;
    cursor: pointer;
  }

  .bttnPrev {
    transition: 0.4s;
    &:hover {
      transform: translateX(-10px);
      transition: 0.4s;
    }
  }

  .bttnNext {
    transition: 0.4s;
    &:hover {
      transform: translateX(10px);
      transition: 0.4s;
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
