import styled from "styled-components";

export const UserGroupsPage = styled.div`
  height: 100vh;
  background-color: #f5f5f5;
  width: 100vw;
`;

export const UserGroupsMain = styled.div`
  height: 91.2%;
  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    height: 100%;
  }
`;

export const UserGroupsContent = styled.div`
  padding: 20px;
  background-color: #e9f5db;

  h3 {
    font-family: var(--font-type-details: "Saira");
    font-size: 60px;
    margin-top: 35px;
    margin-bottom: 35px;
    text-align: center;
  }

  @media (min-width: 1024px) {
    position: relative;
    display: block;
    flex-grow: 1;
    height: 80vh;
    width: 100vw;
    max-width: 1100px;
    padding: 0;
    margin: 0 auto;
    background-color: #f5f5f5;
  }
`;
