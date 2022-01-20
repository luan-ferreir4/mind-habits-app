import styled from "styled-components";

export const ButtonSubmit = styled.button`
  width: 168px;
  height: 50px;

  background: #60b948;
  color: #f5f5f5;
  border: none;
  border-radius: 10px;

  font-size: 18px;
  font-family: "Saira", sans-serif;

  cursor: pointer;

  @media (min-width: 1024px) {
    width: 280px;
    height: 58px;

    font-size: 18px;
  }
`;

export const ButtonHomeNav = styled.button`
  width: 149px;
  height: 55px;
  margin: 45px auto 20px;

  background: ${(props) => (props.registerNewUser ? "##f5f5f5" : "#60b948")};
  color: ${(props) => (props.registerNewUser ? "#000" : "#f1ede0")};
  border: ${(props) => (props.registerNewUser ? "##121212" : "none")};
  border-radius: 10px;

  font-size: 18px;
  font-family: "Saira", sans-serif;

  cursor: pointer;

  @media (min-width: 1024px) {
    width: 403px;
    height: 73px;
    margin-top: 27px;

    font-size: 25px;
  }
`;
