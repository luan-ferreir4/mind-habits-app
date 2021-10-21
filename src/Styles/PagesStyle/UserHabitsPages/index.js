import styled from "styled-components";

export const UserHabitsPage = styled.div`
  display: flex;
  flex-direction: column;
  @media(min-width: 1024px){
    flex-direction: row;
  }
`;
export const HabitsContent = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  h1 {
    margin-bottom: 10px;
    font-family: var(--font-type-details);
    font-weight: var(--font-w-thin);
  }
`;

export const HabitsListContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  width: 98vw;
  max-width: 700px;
  padding: 5px 0;
  margin: 15px auto;

  @media(min-width: 768px){
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
  }
  @media(min-width: 1024px){
    flex-grow:1;
    width: 70vw;
  }
`;
