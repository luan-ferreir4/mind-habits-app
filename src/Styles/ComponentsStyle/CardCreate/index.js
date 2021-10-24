import styled from "styled-components";

export const CardCreateContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  height: 435px;
  width: 300px;
  padding-top: 10px;

  background-color: var(--green-pallet-three);
  color: #000;
  border-radius: 10px;

  font-family: var(--font-type-details);
  font-size: 16px;

  form {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    
    width: 98%;
    height: 100%;
    text-align: center;
    margin: 0 auto;
    line-height: 32px;
    
    .containerTitleAndInput {
      width: 100%;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
    }

    .frequencia {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    button {
     position: absolute;
     left: 50%;
     transform: translateX(-50%);
     bottom: 2.5%;
    }
  }
`;
