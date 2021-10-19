import styled from "styled-components";

export const CardContainer = styled.div`
  width: 258px;
  height: 206px;

  padding: 10px 15px;
  margin: 20px auto;

  background-color: var(--green-pallet-three);
  color: var(--font-secondary);
  border-radius: 20px;
  font-family: var(--font-type-details);

  h1 {
    text-align: center;
    font-weight: var(--font-w-medium);
  }
  
  p {
    text-align: left;
  }

  @media (min-width: 1024px) {
    width: 360px;
    height: 190px;
    margin: 20px 10px;
    p {
      text-align: center;
      font-size: var(--font-size-standart);
    }
  }
`;
