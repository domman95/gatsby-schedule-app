import React from 'react';
import styled from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';
import Nav from './Nav';

const LayoutStyles = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    max-height: 100vh;
    background: #E1E1E1;
    overflow: hidden;
`

const ContainerStyles = styled.div`
    width: 100%;
`

export default function Layout({ children }) {
    return (
        <>
            <GlobalStyles />
            <LayoutStyles>
                <Nav />
                <ContainerStyles>
                    {children}
                </ContainerStyles>
            </LayoutStyles>
        </>
    )
}