import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}

    * {
        box-sizing : border-box;
    }
    
    body {
        font-family: 'Inter', sans-serif;
        background-color: #f3f5ff;
    }
`;

export default GlobalStyle;
