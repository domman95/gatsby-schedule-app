import React from 'react';
import styled from 'styled-components';
import MainContext from '../context/MainContext';
import GlobalStyles from '../styles/GlobalStyles';
import Modal from './Modal';
import Nav from './Nav';


const LayoutStyles = styled.div`
    display: flex;
    max-height: 100vh;
    padding-left: ${({open}) => open ? '60px' : '0'};
    background: #E1E1E1;
    height: 100vh;
    overflow-y: hidden;
    transition: .3s linear;
`

const ContainerStyles = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
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