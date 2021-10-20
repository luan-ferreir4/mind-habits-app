import styled from "styled-components";
import { GlobalStyleComponent } from "styled-components";

/** export const cssPattern = styled.div`
* {
    position: absolute;
    top: 50%
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    
    width: 200px;
    height: 100px;
    padding: 10px;
    margin: 10px;
    
    background-color: #f5f5f5;
    color: #000;
    border: 1px solid #000;
    border-radius: 10px;
    box-shadow: 0px 10px 5px #000;
    //cursor: pointer;
    //outline: unset;
    }

`; */

export const TitleHome = styled.div`
  color: #000;
  font-family: var(--font-type-cursive);
  font-size: 46px;

  @media (min-width: 1024px) {
    font-size: 146px;
  }
`;

export const Subtitle = styled.div`
  color: #000;
  font-family: var(--font-type-body);
  font-size: 22px;

  @media (min-width: 1024px) {
    font-size: 59px;
  }
`;

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100vh;

  background-image: url("images/Lotus1.png");
  background: var(--green-pallet-four);

  p {
    margin-top: 75px;
    padding: 10px;

    font-family: var(--font-type-formal);
    font-size: 16px;
    text-align: center;
  }

  .Image {
    display: flex;

    img {
      margin-top: 25px;

      height: auto;
    }
  }

  .Buttons {
      button {
          margin: 10px;
      }
  }

  @media (min-width: 1024px) {
    align-items: center;

    p {
        margin-top: 125px;
    
        font-family: var(--font-type-formal);
        font-size: 31px;
      }

    .Image {
      justify-content: end;

      width: 100vw;

      img {
        height: 21;
      }
    }
  }
`;
