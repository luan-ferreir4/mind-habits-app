import styled from "styled-components";

export const GComPage = styled.div`
  height: 90vh;
`;

export const GComMain = styled.div`
  height: 91.2%;
  .sideDock {
    display: none;
  }
  @media (min-width: 1024px) {
    .sideDock {
    display: block;
  }
    display: flex;
    align-items: center;
    height: 100%;
  }
`;

export const ButtonPageOne = styled.button`
  font-family: var(--font-type-details);
  font-size: var(--font-size-small);
  background-color: var(--green-pallet-one);
  color: #f5f5f5;
  border: none;
  cursor: pointer;

  margin: 10px;
  height: 50px;
  width: 150px;
  border-radius: 10px;

  @media (min-width: 1024px) {
    position: absolute;
    top: 0;
  }
`;
export const ButtonPageTwo = styled.button`
  font-family: var(--font-type-details);
  font-size: var(--font-size-small);
  background-color: var(--green-pallet-one);
  color: #f5f5f5;
  border: none;
  cursor: pointer;

  margin: 10px;
  height: 50px;
  width: 150px;
  border-radius: 10px;

  @media (min-width: 1024px) {
    position: absolute;
    top: 80px;
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
      height: 10vh;
    }
    .btnCreate {
      padding-left: 680px;
    }
  }
`;
