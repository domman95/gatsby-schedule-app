import React from 'react';
import styled from 'styled-components';
import { hours, workers } from '../context/data';
import Select from './Select';

const Title = styled.h3`

`

const Form = styled.form`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;

    .submit {
        grid-column: 1 / -1;
        border: none;
        background: var(--blue);
        color: white;
        border-radius: 6px;
        padding: 10px 0;
        margin-top: 10px;
    }
`

const Label = styled.label`
    display: grid;
    grid-template-columns: 1fr;
    gap: 5px;

    &.firstName,
    &.lastName {
        grid-column: 1 / -1;
    }

    input {
        border: 1px solid var(--blue);
        border-radius: 6px;
    }

    input[type=color] {
        width: 100%;
    }

    input[type=text] {
        padding: 5px;
    }

`

export default function AddWorker() {
    return (
        <>
            <Title>Dodaj pracownika</Title>
            <Form>
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
        </>
    )
}