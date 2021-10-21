import styled from "styled-components";

export const ContainerAbout = styled.div`
  background-color: #ffffff;

  max-width: 1510px;
  margin: 30px auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  h2 {
    margin-bottom: 20px;

    text-align: center;
    font-family: var(--font-type-details);
    font-size: 30px;

    @media (min-width: 1024px) {
      margin-bottom: 40px;

      font-size: 65px;
      letter-spacing: 5px;
      font-weight: var(--font-w-thin);
    }
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    list-style: none;
    max-width: 90%;

    @media (min-width: 1024px) {
      max-width: 75%;
    }
  }
`;
