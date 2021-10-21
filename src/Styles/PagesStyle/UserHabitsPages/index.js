import styled from "styled-components";

export const UserHabitsPage = styled.div`
  padding: 20px 0;

  .sideDock {
    display: none;
  }

  h1 {
    margin-bottom: 10px;
    text-align: center;
    font-family: var(--font-type-details);
    font-weight: var(--font-w-thin);
  }
`;
export const HabitsContent = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HabitsListContainer = styled.section`
  width: 98vw;
  max-width: 700px;
`;
