import styled from "styled-components";

export const InputContainer = styled.div`
width: 170px;
display: block;
  div{
    text-align: center;
    color: var(--alert-error);
    font-family: var(--font-type-details);
    font-size: var(--font-size-xsmall);
  }
`;
export const InputBox = styled.div`
  display: flex;
  align-items: center;

  max-width: 200px;
  padding: 6px 5px;
  margin: 5px;

  background-color: var(--green-pallet-four);
  border: 1px solid #f5f5f5;
  border-radius: 5px;

  div{
    padding: 0 5px;
    color: var(--green-pallet-three);
    line-height: 50%;
  }

  input {
    background: transparent;
    border: none;
    caret-color: var(--green-pallet-three);

    font-size: 14px;
    font-family: var(--font-type-formal);

    &:focus{
        outline: none;
    }
  }
`;
