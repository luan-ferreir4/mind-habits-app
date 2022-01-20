import styled, { keyframes } from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  align-items: center;

  height: 90vh;
  color: var(--font-primary);
  background-color: #f5f5f5;
`;

export const PictureBackground = styled.div`
    @media (min-width: 1024px) {
      height: 100%;
      width: 54vw;
      background: url(images/Login.png) no-repeat, var(--green-pallet-four);
      background-size: 90%;
  }
`;

const LoginAppearFromLeft = keyframes`
from {
    opacity: 0;
    transform: translateX(-50px);
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

  animation: ${LoginAppearFromLeft} 2s;

  @media (min-width: 1024px) {
    justify-content: center;

    width: 50vw;
    margin-top: 0;
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

    font-size: 25px;
    font-family: var(--font-type-details);
    font-weight: var(--font-w-thin);

    @media (min-width: 1024px) {
      font-size: 44px;
    }
  }
  button {
    margin: 20px auto;
  }

  p {
    margin-top: 8px;

    font-size: 15px;
    font-family: var(--font-type-details);

    @media (min-width: 1024px) {
      font-size: 16px;
    }
  }

  .link {
    color: var(--green-pallet-one);

    font-weight: var(--font-w-bold);

    cursor: pointer;
  }
`;
