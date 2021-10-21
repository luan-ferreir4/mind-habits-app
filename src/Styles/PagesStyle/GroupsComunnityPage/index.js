import styled from "styled-components";

export const GComPage = styled.div`
  height: 90vh;
`;

export const GComMain = styled.div`
  height: 91.2%;
  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    height: 100%;
  }
`;

export const GComContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0;
  padding: 20px;

  h1 {
    font-size: var(--font-size-xlarge);
    font-family: var(--font-type-details);
    font-weight: var(--font-w-thin);
    text-align: center;
    margin: 25px 0;
  }

  .divCards {
    margin: 25px 0;
  }

  @media (min-width: 1024px) {
    position: relative;
    display: block;
    .divCards {
      height: 60vh;
    }
    .btnCreate {
      padding-left: 680px;
    }
  }
`;
