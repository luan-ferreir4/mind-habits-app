import styled from "styled-components";

export const Page = styled.div`
    display: flex;
    flex-direction: column;

    @media(min-width: 1024px){
        display: block;
        background-color: #f5f5f5;
    }
`;

export const NavContainer = styled.nav`
display: none;
@media(min-width: 1024px){
    display: block;
}
`;

export const PageContent = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 95vw;
    padding: 24px 0;
    margin: 0 auto;

    h1{
        font-family: var(--font-type-details);
        font-weight: var(--font-w-thin);
        margin-bottom: 15px;
    }

    @media(min-width: 1024px){
        margin-left: 20vw;
        width: 78vw;
    }
`;

export const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media(min-width: 1024px){
        flex-direction: row;
        flex-wrap: wrap;
        align-items: flex-start;
        justify-content: center;
    }
`;