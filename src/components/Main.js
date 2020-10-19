import React from 'react';
import styled from 'styled-components';

const MainStyles = styled.main`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(230px, 270px));
    align-items: center;
    justify-content: space-evenly;
    gap: 20px;
    margin: 0 30px 20px;
    overflow-y: scroll;
    flex: 1;
`

export default function Main({children}) {
    return (
        <MainStyles>
            {children}
        </MainStyles>
    )
}