import styled from "styled-components";

export const Container = styled.div`
  margin-top: 12px;

  text-align: left;

  @media (min-width: 1024px) {
    width: 400px;
    margin: 10px auto;
  }

  div {
    margin-bottom: 8px;
    font-size: 16px;
    font-family: var(--font-type-formal);

    @media (min-width: 1024px) {
      font-size: 15px;
    }
    span {
      color: var(--alert-error);
    }
  }
`;

export const InputContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 5px;
  color: #c5c5c5;
  border: 2px solid #000;
  border-radius: 10px;

  @media (min-width: 1024px) {
    padding: 12px 20px;
  }

  input {
    display: flex;
    align-items: center;
    height: 25px;
    background-color: transparent;
    color: var(--font-primary);
    border: None;
    outline: None;

    font-size: 16px;
    font-family: var(--font-type-formal);

    @media (min-width: 1024px) {
    }
  }

  svg {
    margin: 2.5px 16px 0 0 ;

    color: var(--font-primary);
  }
`;
