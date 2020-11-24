import styled, { createGlobalStyle } from 'styled-components';
import cross from '../assets/icons/cross.svg'
import star from '../assets/icons/star.svg';
import conversation from '../assets/icons/conversation.svg';


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

    .cross {
        position: absolute;
        top: 15px;
        right: 15px;
        background: url(${cross}) no-repeat center/cover transparent;
        border: none;
        width: 15px;
        height: 15px;
    }

`

export const CustomerImage = styled.div`
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        border: 1px solid var(--blue);
        width: clamp(100px, 130px, 160px);
        height: clamp(100px, 130px, 160px);
        grid-column: 1 / 3;
        padding: 7px;

        &::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            border-radius: 50%;
            transform: translate(-50%, -50%);
            width: 100%;
            height: 100%;
            padding: 5%;
            border: 2px dotted var(--blue);
        }

        img {
            border-radius: 50%;
        }

        .star {
            position: absolute;
            bottom: 0;
            left: 0;
            width: clamp(25px, 30px, 35px);
            height: clamp(25px, 30px, 35px);
            border-radius: 50%;
            background: url(${star}) no-repeat center white;
            border: 1px solid var(--grey);
        }

        .conversation {
            position: absolute;
            top: 10px;
            right: -10px;
            width: clamp(30px, 40px, 50px);
            height: clamp(15px, 20px, 25px);
            border-radius: 8px;
            background: url(${conversation}) no-repeat center white;
            border: 1px solid var(--grey);
        }

        .star,
        .conversation {
            display: none;

            @media (min-width: 768px) {
                display: block;
            }
        }
`

export default GlobalStyles;