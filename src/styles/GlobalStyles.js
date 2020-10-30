import { createGlobalStyle } from 'styled-components';


const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&display=swap');
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
    }

    :root {
        --blue: #2082E9;
        --white: #FFFFFF;
        --grey: #CECECE;
        --darkgrey: #838383;
        --black: #000000;
        --hoverBlue: #3193FE;
        --hoverGrey: #E1E1E1;
        --light: 300;
        --regular: 400;
        --medium: 500;
        --bold: 600;
        --calendarVisitHeight: 50px;
    }   

    html {
        /* overflow-y: hidden; */
        height: 100%;
        background: var(--grey);
    }

    button {
        cursor: pointer;
        outline: none;
    }

    img {
        width: 100%;
    }
    
    /* width */
    ::-webkit-scrollbar {
        width: 6px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background: white; 
        border-radius: 5px;
    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: var(--blue); 
        border-radius: 5px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: var(--hoverBlue); 
    }

    .header {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50px;
        border-bottom: 1px solid var(--grey);
        border-right: 1px solid var(--grey);
    }

`

export default GlobalStyles;