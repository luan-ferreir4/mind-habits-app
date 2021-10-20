import styled from "styled-components";
export const SelectBox = styled.div`
  width: 125px;
  div{
    text-align: center;
    color: var(--alert-error);
    font-family: var(--font-type-details);
    font-size: var(--font-size-xsmall);
  }
`;
export const Select = styled.select`
  width: 100%;
  padding: 5px 10px;
  background-color: var(--green-pallet-four);
  border: none;
  border-bottom: 1px solid transparent;
  border-radius: 2px;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:hover {
    border-bottom: 1px solid var(--font-primary-light);
  }
`;
