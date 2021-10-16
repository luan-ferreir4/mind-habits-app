import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    }
    
    :root {
        --green-pallet-one: #60B948;
        --green-pallet-two: #65BD5A;
        --green-pallet-three: #84C67C;
        --green-pallet-four: #E9F5DB;

        --font-primary: #313131;
        --font-primary-light: #656565;
        --font-secondary: #FFFFFF;
        --alert-error: #FF5555; 
        --alert-succes: #81FF64;
        --bg-with-transp: rgba(0, 0, 0, 0.61);

        --font-type-standart: Courier;
        --font-type-cursive: 'Sail';
        --font-type-details: 'Saira';
        --font-type-body: 'Raleway';
        --font-type-formal: 'PT Serif';

        --font-size-xsmall: 0.4;
        --font-size-small: 0.6rem;
        --font-size-standart: 1rem;
        --font-size-medium: 1.4rem;
        --font-size-large: 2rem;
        --font-size-xlarge: 2.6rem;
    }
`;

export default GlobalStyles;