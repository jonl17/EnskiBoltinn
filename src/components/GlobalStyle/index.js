import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Sarpanch:800&display=swap');
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800&display=swap');
    * {
        font-family: 'Sarpanch', sans-serif;
    }
    html, body, #___gatsby, #___gatsby>div {
        height: 100%;
        width: 100%;
        margin: 0;
    }
    body {
        background: linear-gradient(
            180deg,
            #000000 0%,
            #000000 23.44%,
            #0086b9 40.51%,
            #00aff2 50%,
            #008fc7 59.63%,
            #000000 84.9%,
            #000000 100%
        );       
    }
   
`
