import React from 'react';
import styled from 'styled-components';
import MainContext from '../context/MainContext';
import GlobalStyles from '../styles/GlobalStyles';
import Nav from './Nav';


const LayoutStyles = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    max-height: 100vh;
    padding-left: ${({open}) => open ? '60px' : '0'};
    background: #E1E1E1;
    height: 100vh;
    overflow-y: hidden;
    transition: .3s linear;
`

const ContainerStyles = styled.div`
    width: 100%;
`

export default function Layout({ children }) {

    return (
        <MainContext.Consumer>
            {({ open }) => (
              <>
                <GlobalStyles />
                <LayoutStyles open={open}>
                    <Nav/>
                    <ContainerStyles>
                        {children}
                    </ContainerStyles>
                </LayoutStyles>
              </>  
            )}
        </MainContext.Consumer>
    )
}