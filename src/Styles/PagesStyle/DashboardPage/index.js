import styled from "styled-components";

export const DashboardPage = styled.div`
  height: 100vh;
  background-color: #f5f5f5;
  width: 100vw;
`;

export const DashboardMain = styled.div`
  height: 91.2%;
  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    height: 100%;
  }
`;

export const DashboardContent = styled.div`
  padding: 20px;
  background-color: #e9f5db;
  /* border: 1px solid red; */

  h1 {
    font-size: var(--font-size-medium);
    font-family: var(--font-type-details);
    text-align: center;

    span {
      color: var(--font-primary-light);
      font-weight: var(--font-w-thin);
    }
  }
  .cardDescpt {
    max-width: 400px;
    margin: 10px auto 0;
    font-family: var(--font-type-formal);
  }

  .card--right {
    text-align: right;
  }

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

    h1 {
      position: absolute;
      top: -40px;
      left: 50%;
      transform: translateX(-50%);
    }

    .cardDescpt {
      max-width: 400px;
      margin: 10px 0 0;
      font-family: var(--font-type-formal);
      font-size: 19px;
      font-style: italic;
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
      right: 4%;
      bottom: 2%;
      width: 368px;
    }
  }
`;
