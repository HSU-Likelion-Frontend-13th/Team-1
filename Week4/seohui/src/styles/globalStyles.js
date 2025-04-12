import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset} // margin/padding 등을 다 0으로 -> 브라우저 스타일 통일
`;

export default GlobalStyle;
