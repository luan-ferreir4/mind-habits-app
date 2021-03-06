import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  padding: 20px;
  margin: 5px;
  width: 300px;
  border-radius: 10px;

  background-color: var(--green-pallet-three);
  font-family: var(--font-type-details);
  font-size: var(--font-size-small);

  h2 {
    font-size: var(--font-size-small);
  }

  div {
    width: 100%;
    margin: 5px 0px;
  }

  button {
    margin: 3px;
  }

  .progressbar {
    display: flex;
  }

  @media only screen and (min-width: 1024px) {
    padding: 20px;
    margin: 5px;
    width: 400px;
    border-radius: 25px;

    background-color: var(--green-pallet-three);
    font-family: var(--font-type-details);
    font-size: var(--font-size-standart);

    h2 {
      font-size: var(--font-size-standart);
    }

    div {
      width: 100%;
      margin: 12px 0px;
    }

    button {
      margin: 3px;
    }
  }
`;

export const CardGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  width: 90vw;
  max-width: 750px;
  border-radius: 8px;
  padding: 5px 20px;
  margin: 5px;

  background-color: var(--green-pallet-three);
  font-family: var(--font-type-details);
  font-size: var(--font-size-small);

  .buttonContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 20px;
  }

  button {
    margin: 3px;
  }

  @media only screen and (min-width: 1024px) {
    padding: 10px 30px;
    margin: 5px 0 8px;

    font-size: var(--font-size-standart);
  }
`;

export const CardGroupCommunity = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70vw;
  max-width: 780px;

  padding: 20px 15px;
  margin: 5px auto 15px;

  background-color: var(--green-pallet-three);
  border-radius: 8px;
  font-family: var(--font-type-details);
  text-align: center;
  box-shadow: 2px 2px 3px rgb(0, 0, 0, 0.4), -1px -1px 7px rgb(0, 0, 0, 0.3);

  .left {
    display: flex;
    flex-wrap: wrap;
  }

  .right {
    margin-top: 20px;
    width: 150px;
  }
  label {
    width: 100%;
  }
  button {
    width: 150px;
    height: 40px;
    margin: 3px;
    background-color: #f5f5f5;
    color: var(--font-primary-light);
    border-radius: 20px;
    border: 1px solid transparent;

    &:hover {
      border-color: #f5f5f5;
      background-color: transparent;
    }
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 10px 25px;
    font-size: var(--font-size-standart);
    text-align: left;
  }
`;

export const ButtonMoreInfo = styled.button`
  width: 149px;
  height: 55px;
  margin: 30px auto 20px;
  background: #60b948;
  color: #f5f5f5;
  border: none;
  border-radius: 10px;
  font-size: 18px;
  font-family: "Saira", sans-serif;
  cursor: pointer;
  :hover {
    background-color: var(--green-pallet-two);
  }
`;

export const CardGoal = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;

  width: 280px;
  border-radius: 10px;
  padding: 20px 20px 0;
  margin: 15px auto;

  background-color: var(--green-pallet-three);
  font-family: var(--font-type-details);

  box-shadow: 2px 2px 3px rgb(0, 0, 0, 0.4), -1px -1px 7px rgb(0, 0, 0, 0.3);

  h2 {
    width: 100%;
    text-align: center;
    margin: 0px 0px 10px;
    font-size: var(--font-size-medium);
    line-height: 30px;
  }
  label {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-align: center;

    width: 100%;
    margin: 0 0 6px;
    span {
      margin-left: 25px;
    }
  }
  .progressLabel {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 90px;
    width: 235px;
    margin: 20px auto 0;
    button {
      height: 30px;
    }
  }
  span {
    border-radius: 5px;
    background-color: white;
    width: 140px;
    padding: 0px 5px;
  }
  button {
    height: 30px;
    font-size: var(--font-size-small);
  }

  .buttonCheck {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: var(--green-pallet-one);
    cursor: pointer;
  }

  .centerButton {
    display: flex;
    justify-content: center;
  }

  @media only screen and (min-width: 1024px) {
    h2 {
      font-size: var(--font-size-standart);
      line-height: 35px;
    }

    label {
    }
    label {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      text-align: center;

      width: 100%;
      margin: 0 0 6px;
      font-size: var(--font-size-xsmall);
      span {
        margin-left: 42px;
      }
    }
    .progressLabel {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      height: 90px;
      margin: 20px auto 0;
    }
  }
`;

export const CardActivity = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  width: 280px;
  border-radius: 10px;
  padding: 20px 20px 20px;
  margin: 15px auto;

  background-color: var(--green-pallet-three);
  font-family: var(--font-type-details);

  box-shadow: 2px 2px 3px rgb(0, 0, 0, 0.4), -1px -1px 7px rgb(0, 0, 0, 0.3);

  h2 {
    width: 100%;
    text-align: center;
    margin: 0px 0px 10px;
    font-size: var(--font-size-medium);
    line-height: 30px;
  }

  label {
    width: 100%;
    text-align: center;
  }

  button {
    width: 200px;
    height: 40px;
    margin: 5px;
  }

  .buttonContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 20px;
  }

  @media only screen and (min-width: 1024px) {
    h2 {
      font-size: var(--font-size-standart);
      line-height: 35px;
    }

    label {
      font-size: var(--font-size-standart);
    }

    .buttonContainer {
      display: flex;
      justify-content: center;
      margin-top: 10px;
    }

    button {
      width: 200px;
      height: 40px;
      margin: 5px 10px;
    }
  }
`;

export const CardHabit = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;

  height: 420px;
  width: 280px;
  border-radius: 10px;
  padding: 10px 20px 0;
  margin: 15px auto;

  background-color: var(--green-pallet-three);
  font-family: var(--font-type-details);

  box-shadow: 2px 2px 3px rgb(0, 0, 0, 0.4), -1px -1px 7px rgb(0, 0, 0, 0.3);

  h2 {
    width: 100%;
    text-align: center;
    margin: 0px 0px 10px;
    font-size: var(--font-size-medium);
    line-height: 30px;
  }
  label {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-align: center;

    width: 100%;
    margin: 0 0 6px;
    span {
      margin-left: 25px;
    }
  }
  .progressLabel {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 90px;
    width: 235px;
    margin: 20px auto 0;
    button {
      height: 30px;
    }
  }
  span {
    border-radius: 5px;
    background-color: white;
    width: 140px;
    padding: 0px 5px;
  }
  button {
    height: 30px;
    font-size: var(--font-size-small);
  }

  @media only screen and (min-width: 1024px) {
    height: 360px;
    h2 {
      font-size: var(--font-size-standart);
      line-height: 35px;
    }

    label {
    }
    label {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      text-align: center;

      width: 100%;
      margin: 0 0 6px;
      font-size: var(--font-size-xsmall);
      span {
        margin-left: 42px;
      }
    }
    .progressLabel {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      height: 90px;
      margin: 20px auto 0;
    }
  }
`;

export const ProgressButton = styled.button`
  margin: 10px;
  font-size: 20px;
  width: 30px;
  height: 30px;
  border-radius: 30px;

  border: 2px solid #f5f5f5;
  color: white;
  background-color: var(--green-pallet-three);
  cursor: pointer;

  &:hover {
    background-color: #f5f5f5;
    color: var(--font-primary-light);
  }
`;
