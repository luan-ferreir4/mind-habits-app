import styled from "styled-components";

export const UserGroupsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: var(--green-pallet-four);
  color: #000;

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: start;
  }
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-start: start;

  height: auto;
  width: 75vw;

  background-color: #f5f5f5;
  color: #000;

  h3 {
    font-family: var(--font-type-details: "Saira");
    font-size: 60px;
    margin-top: 35px;
    margin-bottom: 35px;
    text-align: center;
  }

  .CardMyGroup {
    background-color: #84c67c;
    border-radius: 30px;
    margin: 10px;
    padding: 35px;
    padding-left: 35px;
  }

  .CardMyGroup:hover {
      cursor: pointer;
      background-color: #60B948;
  }
`;
