import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import colors from "./color";

const GlobalStyle = createGlobalStyle`
    ${reset}

    * {
        box-sizing : border-box;
    }
    
    body {
        font-family: 'Inter', sans-serif;
        background-color: ${colors.backgroundColor};
    }
`;

export default GlobalStyle;
