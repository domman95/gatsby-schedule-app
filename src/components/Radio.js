import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
    position: relative;
    width: 100px;
    height: 30px;
    cursor: pointer;

    input {
        display: none;
    }

    span {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--darkgrey);
        background: var(--white);
        width: 100%;
        height: 100%;
        border: 1px solid var(--grey);
        font-weight: var(--bold);

    }

    input:checked + span{
        background: var(--blue);
        color: var(--white);
    }

`

const RadioStyles = styled.input`
`

export default function Radio({children, checked}) {
    return (
        <Label>
            <RadioStyles type="radio" name="radio" value={children} defaultChecked={checked}/>
            <span>{children}</span>
        </Label>
    )
}