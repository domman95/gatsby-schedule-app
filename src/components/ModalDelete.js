import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const ModalStyles = styled.div`
    display: ${({ open }) => open ? 'flex' : 'none'};
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: fixed;
    border-radius: 6px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: clamp(260px, 400px, 600px);
    padding: 70px 40px;
    background: var(--white);

    .close {
        position: absolute;
        top: 10px;
        right: 10px;
        border: none;
        background: transparent;
        font-size: 24px;
    }

    p {
        text-align: center;
        white-space: nowrap;
    }

    .wrapperButtons {
        margin-top: 10px;
        button:nth-child(1) {
            margin-right: 10px;
        }
    }
`

export default function ModalDelete({children, isOpen, currentName}) {
    return (
        <ModalStyles open={isOpen}>
            <button className="close">&#10006;</button>
            <p>
                {children}
            </p>
                {currentName && <p> {currentName}?</p>}
            <div className="wrapperButtons">
                <Button>tak</Button>
                <Button secondary>nie</Button>
            </div>
        </ModalStyles>
    )
}