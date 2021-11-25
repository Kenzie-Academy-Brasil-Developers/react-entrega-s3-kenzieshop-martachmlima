import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body{
    margin:0;
    padding: 0;
    background: whitesmoke;
    font-family: Arial, Helvetica, sans-serif;
    box-sizing:border-box;
    display:flex;
    flex-direction:column;
}

div{
    display: flex;
    align-items:center;
    justify-content:center;
}
`;

export default GlobalStyle;
