import styled from "styled-components";

export const About = styled.div`
  position: relative;
  height: 175px;
  width: 100%;
  margin-bottom: 30px;
  div {
    border-radius: 12px;
    top: 0;
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

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;

  .buttonContainer-ativity {
    display: flex;
    justify-content: center;
  }

  .buttonContainer-goal {
    display: flex;
    justify-content: center;
  }

  @media (min-width: 1024px) {
    .buttonContainer-ativity {
      width: 680px;
      justify-content: left;
      margin: 10px 0px;
    }
  }
  @media (min-width: 1024px) {
    .buttonContainer-goal {
      width: 680px;
      justify-content: right;
      margin: 10px 0px;
    }
  }
`;
