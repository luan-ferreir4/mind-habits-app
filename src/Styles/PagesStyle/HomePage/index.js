import styled from "styled-components";

export const TitleHome = styled.div`
  color: #000;
  font-family: var(--font-type-cursive);
  font-size: 46px;

  z-index: 1;

  @media (min-width: 1024px) {
    font-size: 146px;
  }
`;

export const Subtitle = styled.div`
  color: #000;
  font-family: var(--font-type-body);
  font-size: 22px;

  z-index: 1;

  @media (min-width: 1024px) {
    font-size: 59px;
  }
`;

export const HomePage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100vh; 

  p {
    margin-top: 75px;
    padding: 10px;

    z-index: 1;

    font-family: var(--font-type-formal);
    font-size: 16px;
    text-align: center;
  }

  .Logo {
    display: flex;

    img {
      margin-top: 25px;

      height: auto;
    }
  }

  .Background {
    display: block;
    position: absolute;

    margin-top: 175px;

    img {
      height: 45vh;
      width 75vw;
    }
  }

  .Buttons {
      z-index: 1;
      button {
          margin: 10px;
      }
  }

  @media (min-width: 1024px) {
    align-items: center;

    background: var(--green-pallet-four);

    p {
        margin-top: 125px;
    
        font-family: var(--font-type-formal);
        font-size: 31px;
      }

    .Logo {
      justify-content: end;

      width: 100vw;

      img {
        height: 21;
      }
    }

    .Background {
      display: block;
      position: absolute;
  
      margin-top: 125px;

      img {
        height: 815px;
        width 875px;
      }
    }
  }
`;
