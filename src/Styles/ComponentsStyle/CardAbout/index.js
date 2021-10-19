import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: nowrap;
  flex-direction: column;

  width: 300px;
  height: 170px;

  background-color: var(--green-pallet-three);
  color: #000;

  border-radius: 30px;

  font-size: 22px;
  font-family: var(--font-type-details);

  p {
    padding-left: 15px;
    font-size: 20px;
    font-family: var(--font-type-details);
    line-height: 1;
    height: 20px;

    span {
      background-color: #e9f5db;
      padding: 0px 20px 0px;
    }
  }
`;
