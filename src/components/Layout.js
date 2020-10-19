import React from 'react';
import styled from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';
import Nav from './Nav';

const LayoutStyles = styled.div`
    max-height: 100vh;
`

export default function Layout({ children }) {
    return (
        <>
            <GlobalStyles />
            <LayoutStyles>
                <Nav />
                {children}
            </LayoutStyles>
        </>
    )
}