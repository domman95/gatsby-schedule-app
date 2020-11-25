import React from 'react';
import styled from 'styled-components';
import MainContext from '../context/MainContext';
import GlobalStyles from '../styles/GlobalStyles';
import Nav from './Nav';


const LayoutStyles = styled.div`
    display: flex;
    max-height: 100vh;
    padding-left: ${({open}) => open ? '60px' : '0'};
    background: #E1E1E1;
    height: 100%;
    max-width: 100vw;
    transition: .3s linear;
`

const ContainerStyles = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export default function Layout({ children }) {
    return (
        <MainContext.Consumer>
            {({ open }) => (
                <>
                        <GlobalStyles />
                        <LayoutStyles open={open}>
                                <Nav />
                        <ContainerStyles>
                            {children}
                        </ContainerStyles>
                        </LayoutStyles>
                </>
            )}
        </MainContext.Consumer>
    )
}