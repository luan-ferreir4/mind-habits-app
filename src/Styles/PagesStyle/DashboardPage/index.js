import styled from "styled-components";

export const DashboardPage = styled.div`
  display: flex;
  flex-direction: column;
  height: 90vh;

  .sideDock {
    display: none;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    height: 100%;
    .sideDock {
      display: block;
    }
  }
`;

export const DashboardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 80vh;
  padding: 25px 0;

  h1 {
    font-size: var(--font-size-xlarge);
    font-family: var(--font-type-details);
    text-align: center;

    span {
      color: var(--font-primary-light);
      font-weight: var(--font-w-thin);
    }
  }
  .cardDescpt {
    width: 300px;
    margin: 10px auto 0;
    font-family: var(--font-type-formal);
  }

  .card--right {
    text-align: right;
  }
  @media (min-width: 768px) {
    .cardDescpt {
      width: 400px;
    }
  }
  @media (min-width: 1024px) {
    position: relative;
    flex-grow: 1;
    height: 92vh;
    /* width: 76vw; */
    padding: 0;

    h1 {
      position: absolute;
      top: 4%;
      left: 50%;
      transform: translateX(-50%);
      font-family: var(--font-type-details);
    }

    .cardDescpt {
      width: 460px;
      margin-top: 40px;
      font-size: var(--font-size-medium);
      font-family: var(--font-type-formal);
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
      right: 8%;
      bottom: 2%;
      width: 368px;
    }
  }
`;
