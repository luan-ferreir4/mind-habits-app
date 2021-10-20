import styled from "styled-components";

export const DashboardPage = styled.body`
  height: 100vh;
`;

export const DashboardMain = styled.main`
  height: 91.2%;

  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    height: 90%;
  }
`;

export const DashboardContent = styled.section`
  display: none;
  @media (min-width: 1024px) {
    position: relative;
    display: block;
    flex-grow: 1;
    height: 100%;
    max-width: 1100px;
    h1 {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      font-size: var(--font-size-large);
      font-family: var(--font-type-details);
      text-align: center;
      span {
        color: var(--font-primary-light);
        font-weight: var(--font-w-thin);
      }
    }

    .cardDescpt {
      max-width: 400px;
      margin: 10px 0 0;
      font-family: var(--font-type-formal);
    }

    .card--right {
      text-align: right;
    }

    .Card1 {
      position: absolute;
      left: 5%;
      top: 10%;
      width: 368px;
    }

    .Card2 {
      position: absolute;
      right: 6%;
      bottom: 2%;
      width: 368px;
    }
  }
`;
