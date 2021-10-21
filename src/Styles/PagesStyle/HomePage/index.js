import styled from "styled-components";

export const TitleHome = styled.div`
  margin-top: 125px;

  color: #000;
  font-family: var(--font-type-cursive);
  font-size: 46px;

  z-index: 1;

  @media (min-width: 1024px) {
    margin-top: 5px;
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

    margin-top: 25px;

    img {
      display: none;
    }
  }

  .Background {
    display: block;
    position: absolute;

    margin-top: 155px;

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
        display: flex;
        height: 17vh;
        width: auto;
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
