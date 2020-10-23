import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const Background = styled.div`
    background: rgb(0,0,0,.5);
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`


const ModalStyles = styled.div`
    position: relative;
    width: clamp(200px, 400px, 600px);
    padding: 50px 0 40px;
    background: var(--white);
    border-radius: 6px;
`

const Close = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    border: none;
    padding: 0 5px;
    font-size: 22px;
    background: transparent;
    cursor: pointer;
`

const Header = styled.h4`
    width: 20px;
`

const Form = styled.form`

`

const DeleteModalStyles = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .question {
        margin-bottom: 20px;

        p {
            text-align: center;
            /* white-space: nowrap; */
        }   

    }
    .buttonsWrapper {
        button {
            margin: 0 5px;
        }
    }
`

const AddModalStyles = styled.div`

`

const Modal = ({ children }) => (
    <Background>
        <ModalStyles>
            <Close>&#10006;</Close>
            {children}
        </ModalStyles>
    </Background>
)

export const DeleteModal = ({children}) => (
    <Modal>
        <DeleteModalStyles>
            <div className="question">
                <p>Czy na pewno chcesz usunąć pracownika </p>
                <p>Dominik Lasek?</p>
            </div>
            <div className="buttonsWrapper">
                <Button>tak</Button>
                <Button secondary>nie</Button>
            </div>
        </DeleteModalStyles>
    </Modal>
)

export const AddModal = ({ children}) => (
    <Modal>
        <AddModalStyles>

        </AddModalStyles>
    </Modal>
)

