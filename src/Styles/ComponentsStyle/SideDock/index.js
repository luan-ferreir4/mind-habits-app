import styled from "styled-components";

export const SideDockStyled = styled.div`
  @media (min-width: 1024px) {
    position: fixed;
    height: 100vh;
    width: 20vw;
    background-color: var(--green-pallet-four);

    .content {
      position: fixed;
      top: 50%;
      transform: translateY(-50%);
      display: flex;
      flex-direction: column;
      align-items: center;
      width: inherit;
      font-family: var(--font-type-details);

      img {
        width: 90px;
      }

      label {
        height: 30px;
      }

      h4 {
        font-size: 35px;
        font-weight: var(--font-w-standart);
      }

      .content-buttons {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: inherit;
        margin: 25px 0;

        button {
          width: 75%;
          height: 46px;
          padding: 5px;
          margin-top: 25px;

          background-color: #60b948;
          color: #ffff;
          border: none;
          border-radius: 10px;
          margin-top: 15px;

          font-family: var(--font-type-details);
          font-size: var(--font-size-standart);
          cursor: pointer;
          transition: 0.3s;

          &:hover {
            background-color: #84c67c;
            transform: translateY(-2px);
            transition: 0.3s;
          }
        }
      }
    }
  }
`;
