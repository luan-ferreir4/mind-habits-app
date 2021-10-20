import styled from "styled-components";

export const DashboardPage = styled.body`
  height: 100vh;
`;

export const DashboardMain = styled.main`
  height: 92%;

  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    height: 91.5%;
  }
`;

export const DashboardContent = styled.section`
  display: none;
  @media (min-width: 1024px) {
    position: relative;
    display: block;
    flex-grow: 1;
    height: 100%;

    h1 {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
      font-size: var(--font-size-large);
      font-family: var(--font-type-details);
      text-align: center;
      span {
        font-weight: var(--font-w-thin);
        color: #f5ee;
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
        top: 0;
        width: 368px;
    }
    .Card2 {
        position: absolute;
        right: 10%;
        width: 368px;
    }
  }
`;
