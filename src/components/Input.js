import React from 'react';
import styled from 'styled-components';
import search from '../assets/icons/search.svg';

const Label = styled.label`
    display: grid;
    grid-template-columns: auto 1fr auto;
    margin-left: 10px;
    border: 1px solid var(--grey);
    border-radius: 6px;

    .searchIcon {
        width: 32px;
        padding: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .text {
        border: none;
        border-left: 1px solid var(--grey);
        border-right: 1px solid var(--grey);
        outline: none;
        font-size: 16px;
        text-align: center;

        &::placeholder {
            font-weight: var(--light);
        }
    }

    .submit {
        border: none;
        background: transparent;
        width: 32px;
        padding: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 16px;
        cursor: pointer;
        transition: transform .3s;

        &:hover {
            transform: scaleX(1.3);
        }
    }
`

export default function Input() {
    return (
        <Label>
            <div className="searchIcon">
                <img src={search} alt=""/>
            </div>
            <input className="text" type="text" placeholder="wpisz nazwisko klienta, którego szukasz...."/>
            <input className="submit" type="submit" value='&#129122;' />
        </Label>        
    )
}