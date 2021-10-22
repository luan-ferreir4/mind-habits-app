import styled from "styled-components";

export const GroupDetailsPage = styled.div`
  height: 100vh;
  background-color: #f5f5f5;
  width: 100vw;
`;

export const GroupDetailsMain = styled.div`
  height: 91.2%;
  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    height: 100%;
  }
`;

export const ButtonToggle = styled.button`
  width: 150px;
  height: 55px;
  margin: 5px;

  background: #60b948;
  color: #f5f5f5;
  border: none;
  border-radius: 10px;

  font-size: 18px;
  font-family: "Saira", sans-serif;

  @media (min-width: 1024px) {
    margin: 0px 30px;
    width: 310px;
    height: 55px;

    cursor: pointer;

    :focus {
      color: black;
      border: 2px solid black;
    }
    :active {
      color: black;
    }
    :hover {
      color: black;
    }
  }
`;

export const GroupDetailsContent = styled.div`
  padding: 20px;
  background-color: #e9f5db;
  justify-content: center;

  @media (min-width: 1024px) {
    position: relative;
    display: block;
    flex-grow: 1;
    height: 80vh;
    width: 100vw;
    max-width: 1100px;
    padding: 0;
    margin: 0 auto;
    background-color: #f5f5f5;
  }

  h1 {
    font-size: var(--font-size-medium);
    font-family: var(--font-type-details);
    font-weight: var(--font-w-thin);
    text-align: center;
    margin: 0;
    padding: 0;
  }
  .subtitle {
    font-size: var(--font-size-standart);
    font-family: var(--font-type-formal);
    font-weight: var(--font-w-thin);
    font-style: italic;
    text-align: center;
    width: 100%;
    display: inline-block;
    margin: 0px 0px 40px 0px;
  }

  .buttonToggleContainer {
    display: flex;
    justify-content: center;
  }

  .ButtonCreateContainer {
    display: flex;
    justify-content: center;
  }

  .listContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 30px auto;
    max-width: 700px;
  }

  .about {
    height: 175px;
    width: 100%;
    display: block;
    position: relative;
    div {
      top: 0;
    }
    margin-bottom: 30px;
  }

  @media (min-width: 1024px) {
    h1 {
      font-size: 50px;
      font-family: var(--font-type-details);
      font-weight: var(--font-w-normal);
      text-align: center;
      margin: 0;
    }
    h2 {
      margin: 0;
    }
    span {
      font-size: var(--font-size-small);
      font-family: var(--font-type-formal);
      font-weight: var(--font-w-thin);
      font-style: italic;
      text-align: center;
      margin: 0;
    }

    .ButtonCreateContainer {
      display: default;
    }

    .buttonContainer-ativity {
      display: flex;
      justify-content: left;

      width: 700px;
      padding: 10px;
    }

    .buttonContainer-goal {
      display: flex;
      justify-content: right;

      width: 700px;
      padding: 10px;
    }

    .listContainer {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      max-width: 100%;
    }
  }
`;
