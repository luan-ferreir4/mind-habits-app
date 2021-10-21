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

  width: 100%;
  border-radius: 10px;
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
    width: 100%;
    border-radius: 25px;
    padding: 10px 30px;
    margin: 5px;

    font-size: var(--font-size-standart);
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
`;
