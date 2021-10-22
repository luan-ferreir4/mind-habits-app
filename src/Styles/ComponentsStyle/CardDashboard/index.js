import styled from "styled-components";

export const CardContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
  width: 258px;
  height: 206px;
  
  padding: 10px 15px;
  margin: 20px auto;

  background-color: var(--green-pallet-three);
  color: var(--font-secondary);
  border-radius: 20px;
  font-family: var(--font-type-details);

  h3 {
    text-align: center;
    font-size: var(--font-size-large);
    font-weight: var(--font-w-medium);
  }
  
  p {
      text-align: center;
      font-size: var(--font-size-standart);
  }
  @media (min-width: 768px) {
    position: relative;
    width: 460px;
    height: 260px;
    h3{
      position: absolute;
      top: 5%;
      left: 50%;
      transform: translateX(-50%);
    }
    p{
      margin-top: 20px;
      font-size: var(--font-size-medium);
    }
  }
`;
