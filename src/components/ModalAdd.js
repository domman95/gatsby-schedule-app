import React from 'react';
import styled from 'styled-components';

const ModalAddStyles = styled.div`
    display: ${({ open }) => open ? 'flex' : 'none'};
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--white);
    border-radius: 6px;
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

`

const Form = styled.form`
    display: grid;
    align-items: center;
    gap: 10px;
    grid-template-columns: 1fr 1fr;
    width: 100%;

    h4 {
        font-size: 20px;
        font-weight: var(--medium);
        margin-bottom: 20px;
    }

    h4,
    .firstName,
    .lastName,
    .submit {
        grid-column: 1 / -1;
    }

    .submit {
        border: none;
        height: 30px;
        color: white;
        font-weight: var(--bold);
        background: var(--blue);
        border-radius: 6px;
        cursor: pointer;
        margin-top: 20px;

        &:hover{
            background: var(--hoverBlue);
        }
    }

    .displayName {
        grid-column: 1 / 2;
    }

    .color {
        grid-column: 2 / 3;

        input {
            width: 100%;
        }
    }

`

const Label = styled.label`
    display: flex;
    flex-direction: column;

    span {
        font-weight: var(--bold);
    }

    input {
        margin: 5px 0;
        border: 1px solid var(--blue);
        border-radius: 6px;
        background: white;
        height: 30px;
        padding: 0 5px;
        outline: none;
        font-size: 16px;
    }
`

export default function ModalAdd({title, isOpen}) {
    return (
        <ModalAddStyles open={isOpen}>
            <button className="close">&#10006;</button>
            <Form>
                <h4>{title}!</h4>
                <Label className="firstName">
                    <span>Imię: </span>
                    <input type="text"/>
                </Label>
                <Label className="lastName">
                    <span>Nazwisko: </span>
                    <input type="text"/>
                </Label>
                <Label className="displayName">
                    <span>Wyświetlana nazwa: </span>
                    <input type="text"/>
                </Label>
                <Label className="color">
                    <span>Kolor: </span>
                    <input type="color"/>
                </Label>
                <input className="submit" type="submit" value="zapisz"/>
            </Form>
        </ModalAddStyles>
    )
}