import styled from "styled-components";
 
export const Button = styled.button`
    display: block;

    width: 130px;
    padding: 4px 20px;
    margin: 2px;
    
    background-color: var(--green-pallet-two);
    color: var(--font-secondary);
    border: none;
    border-radius: 5px;
    font-size: var(--font-size-small);
    font-family: var(--font-type-details);
    
    &:hover{
        background-color: var(--green-pallet-three);
    }
`; 