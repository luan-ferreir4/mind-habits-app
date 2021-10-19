import styled from "styled-components";

export const Container = styled.div`
  margin-top: 8px;

  text-align: left;

  @media (min-width: 1024px) {
    width: 495px;
    margin: 10px auto;
  }

  div {
    font-size: 16px;
    font-family: var(--font-type-formal);

    @media (min-width: 1024px) {
      font-size: 25px;
    }
    span {
      color: var(--alert-error);
    }
  }
`;

export const InputContainer = styled.div`
  display: flex;

  width: 100%;
  padding: 0.5rem;

  background: #fff;
  color: #c5c5c5;
  border: 2px solid #000;
  border-radius: 10px;

  @media (min-width: 1024px) {
    padding: 1.5rem;
  }

  input {
    align-items: center;
    flex: 1;

    height: 25px;

    background: transparent;
    color: #000;
    border: 0;

    font-size: 16px;
    font-family: "PT Serif', serif";

    @media (min-width: 1024px) {
      font-size: 25px;
    }
  }

  svg {
    margin-right: 16px;

    color: #000;
  }
`;
