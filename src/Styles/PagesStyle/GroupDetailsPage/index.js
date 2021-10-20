import styled from "styled-components";

export const ButtonToggle = styled.button`
  width: 180px;
  height: 50px;
  margin: 0px 10px;

  background: #60b948;
  color: #f5f5f5;
  border: none;
  border-radius: 10px;

  font-size: var(--font-size-standart);
  font-family: "Saira", sans-serif;

  cursor: pointer;

  @media (min-width: 1024px) {
    width: 250px;
    height: 58px;
    margin: 0px 20px;

    font-size: var(--font-size-standart);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  .buttonContainer {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
  }

  .listContainer {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const TopContainer = styled.div`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  h1 {
    text-align: center;
    font-family: var(--font-type-details);
    font-weight: var(--font-w-normal);
    font-size: var(--font-size-xlarge);
    margin: 40px 0px 0px 0px;
    width: 100%;
  }
  h2 {
    width: 100%;
    text-align: center;
    font-family: var(--font-type-formal);
    font-weight: var(--font-w-normal);
    font-size: var(--font-size-medium);
    font-style: italic;
    margin: 0px 0px 40px 0px;
  }

  @media (min-width: 1024px) {
    h1 {
      margin: 60px 0px 0px 0px;
    }
  }
`;
