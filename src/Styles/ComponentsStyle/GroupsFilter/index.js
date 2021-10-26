import styled from "styled-components";

export const GroupsFilter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 80vw;
  max-width: 680px;
  padding: 14px 0;
  margin: 25px 0 0;
  line-height: 36px;

  background-color: var(--green-pallet-three);
  border: 1px solid var(--green-pallet-one);
  border-radius: 5px;

  font-size: var(--font-size-standart);

  &,
  select,
  button {
    font-family: var(--font-type-body);
    color: var(--font-primary);
    border-radius: 8px;
  }

  section {
    text-align: center;
    select {
      padding: 5px 8px;
      margin-top: 5px;
      background-color: #f5f5f5;
    }
  }

  button {
    padding: 8px 25px;
    margin-top: 12px;
    background-color: #f5f5f5;
    border: 1px solid transparent;
    cursor: pointer;
  }

  @media (min-width: 1024px) {
    section {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 320px;
    }
  }
`;
