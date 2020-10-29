import React from 'react';
import styled from 'styled-components';
import AddVisit from './AddVisit';
import cross from '../assets/icons/cross.svg';
import AddCustomer from './AddCustomer';
import AddWorker from './AddWorker';
import DeleteCustomer from './DeleteCustomer';
import DeleteWorker from './DeleteWorker';
import DeleteVisit from './DeleteVisit';

const Background = styled.div`
    position: fixed;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 999999;
    background: rgb(0,0,0,.5);
    display: flex;
    justify-content: center;
    align-items: center;
`

const ModalStyles = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    padding: 40px 30px;
    background: var(--white);
    border-radius: 6px;
    font-size: 16px;

    h3,
    span {
        color: black;
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

export default function Modal({children, close}) {
    return (
        <Background>
            <ModalStyles>
                <button onClick={close} className="cross"></button>
                {children}
            </ModalStyles>
        </Background>
    )
}