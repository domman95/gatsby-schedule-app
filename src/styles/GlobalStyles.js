import { createGlobalStyle } from 'styled-components';


const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
    }

    :root {
        --blue: #2082E9;
        --white: #F3F3F3;
        --grey: #CECECE;
        --darkgrey: #838383;
        --black: #000000;
        --hoverBlue: #3193FE;
        --hoverGrey: #E1E1E1;
    }   

    img {
        width: 100%
    }
    
`

export default GlobalStyles;