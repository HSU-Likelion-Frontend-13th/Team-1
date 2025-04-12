import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}

    body {
        background-color: #f3f5ff;
    }
`;

export default GlobalStyle;
