import styled from "styled-components";

export const ButtonToggle = styled.button`
  width: 160px;
  height: 55px;
  margin: 30px 20px;

  background: #60b948;
  color: #f5f5f5;
  border: none;
  border-radius: 10px;

  font-size: 18px;
  font-family: "Saira", sans-serif;

  cursor: pointer;

  @media (min-width: 1024px) {
    /* width: 480px;
    height: 78px;
    margin: 35px auto 35px; */

    /* font-size: 25px; */
  }
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  .buttonContainer-ativity {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: left;
  }
  .buttonContainer-goal {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: right;
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
