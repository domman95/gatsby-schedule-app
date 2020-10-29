import React from 'react';
import styled from 'styled-components';
import search from '../assets/icons/search.svg';

const Label = styled.label`
    display: grid;
    grid-template-columns: auto 1fr auto;
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
            font-size: 10px;

            @media (min-width: 768px) {
                font-size: 16px;
            }
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
        color: var(--blue);
        font-weight: var(--bold);
        font-size: 16px;
        cursor: pointer;
        transition: transform .3s;

        &:hover {
            transform: scaleX(1.3);
        }
    }
`

export default function Search({findCustomer, setFilteredCustomers, customers}) {
    return (
        <Label className="customersInput">
            <div className="searchIcon">
                <img src={search} alt=""/>
            </div>
            <input className="text" onChange={(e) => findCustomer(e, setFilteredCustomers, customers)} type="text" placeholder="wpisz nazwisko klienta, którego szukasz...."/>
            <input className="submit" type="submit" value='&#129122;' />
        </Label>        
    )
}