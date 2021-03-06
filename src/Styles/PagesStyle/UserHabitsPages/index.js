import styled from "styled-components";

export const HabitsListContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  width: 98vw;
  max-width: 100%;
  padding: 5px 0;
  margin: 15px auto;

  @media(min-width: 768px){
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
  }
  
  @media(min-width: 1024px){
    flex-grow:1;
    width: 90vw;
  }
`;
