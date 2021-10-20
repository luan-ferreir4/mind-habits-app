import styled from "styled-components";
export const Select = styled.select`
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
