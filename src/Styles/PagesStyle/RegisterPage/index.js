import styled, { keyframes } from "styled-components";

export const RegisterContainer = styled.div`
  display: flex;
  align-items: stretch;

  height: 100vh;

  background-color: #f5f5f5;
  color: #000;
`;

export const PictureBackground = styled.div`
  @media (min-width: 1024px) {
    flex: 1;

    background: url("images/healthy1.png") no-repeat center,
      var(--green-pallet-four);
    background-size: 638px;
  }
`;

const RegisterAppearFromRight = keyframes`
from {
    opacity: 0;
    transform: translateX(50px);
}

to{
    opacity: 1;
    transform: translateX(0px);
}`;

export const FormAnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  width: 100vw;
  margin-top: 25px;

  animation: ${RegisterAppearFromRight} 2s;

  @media (min-width: 1024px) {
    justify-content: center;

    width: 50vw;
    margin-top: 0;
    margin-bottom: 50px;
  }

  .form {
    width: 280px;
    margin-top: 10px;

    text-align: center;

    font-family: var(--font-type-formal);

    @media (min-width: 1024px) {
      width: 700px;
    }
  }

  h2 {
    margin-bottom: 16px;

    font-size: 30px;
    font-family: var(--font-type-details);
    font-weight: var(--font-w-thin);

    @media (min-width: 1024px) {
      font-size: 46px;
    }
  }
  button {
    margin: 20px auto 0px;
  }

  p {
    margin-top: 8px;

    font-size: 15px;
    font-family: var(--font-type-details);

    @media (min-width: 1024px) {
      font-size: 20px;
    }
  }

  .link {
    color: var(--green-pallet-one);

    font-weight: var(--font-w-bold);

    cursor: pointer;
  }
`;
