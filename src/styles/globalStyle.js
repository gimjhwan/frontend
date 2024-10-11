import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset};

    * {
        font-family: 'Satoshi', sans-serif;
        box-sizing: border-box;
    }
    #slide-root {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;

        align-items: center;
    }
`

export default GlobalStyle;