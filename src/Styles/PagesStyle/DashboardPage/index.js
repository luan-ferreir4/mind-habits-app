import styled from "styled-components";

export const DashboardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 80vh;
  padding: 25px 0;

  h1 {
    font-size: var(--font-size-large);
    font-family: var(--font-type-details);
    margin-bottom: 15px;
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
    width: 80vw;
    padding: 0;
    margin-left: 20vw;

    h1 {
      position: absolute;
      top: 4%;
      left: 50%;
      transform: translateX(-50%);
      font-family: var(--font-type-details);
      margin-bottom: 15px;
    }

    .cardDescpt {
      width: 390px;
      margin-top: 40px;
      font-size: var(--font-size-standart);
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
      bottom: -10%;
      width: 368px;
    }
  }
`;
