import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 75vw;
  height: 220px;

  padding: 20px 15px;
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
  .containerText {
    p {
      text-align: center;
      font-size: var(--font-size-standart);

      span {
        color: var(--font-primary-light);
      }

      .pLink {
        color: var(--font-primary-light);
        border-bottom: 1px solid transparent;
        &:hover {
          border-color: var(--font-secondary);
        }
      }
    }
  }
  
  @media (min-width: 768px){
    width: 350px;
  }

  @media (min-width: 1024px) {
    position: relative;
    height: 200px;
    width: 410px;
    h3 {
      position: absolute;
      top: 5%;
      left: 50%;
      transform: translateX(-50%);
    }
    .containerText {
      margin-top: 34px;
      p {
        margin-bottom: 10px;
        font-size: var(--font-size-standart);
      }
    }
  }
`;
