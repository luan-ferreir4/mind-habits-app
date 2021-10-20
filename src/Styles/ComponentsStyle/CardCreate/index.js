import styled from "styled-components";

export const CardCreateContainer = styled.div`
  /* display: flex;
justify-content: space-around;
flex-wrap: wrap;
flex-direction: column; */

  margin: 0 auto;

  width: 300px;
  height: 250px;

  background-color: var(--green-pallet-three);
  color: #000;

  border-radius: 30px;

  font-size: 16px;
  font-family: var(--font-type-details);

  form {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    flex-wrap: wrap;
    text-align: left;
    border: 1px solid blue;
    margin: 100px 10px 0px;
    position: relative;
    padding-top: 10px;

    width: 90%;
    height: 90%;

    .containerTitleAndInput {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: flex-start;
      border: 1px solid red;
    }

    .frequencia {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: flex-start;
      border: 1px solid red;
    }

    button {
      position: absolute;
      bottom: 5px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;
