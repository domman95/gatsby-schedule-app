import React, {useState} from 'react';
import styled from 'styled-components';
import { hours, workers } from '../context/data';
import { getData } from '../context/MainContext';
import { db } from '../services/firebase';
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

    input,
    select {
        border: 1px solid var(--blue);
        border-radius: 6px;
        padding: 5px;
    }
`

export default function AddCustomer({close}) {

    const [newCustomer, setNewCustomer] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        sex: 'female'
    });

    const handleChange = (e) => {
        setNewCustomer({
            ...newCustomer,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        db.collection('customers').add(newCustomer).then(() => {
            getData()
            close(false);
        })
    }

    return (
        <>
            <Title>Dodaj klienta</Title>
            <Form onChange={handleChange} onSubmit={handleSubmit}>
                <Label className="firstName">
                    <span>Imię: </span>
                    <input type="text" name="firstName" pattern="[a-zA-Z]*" maxLength="35" required/>
                </Label>
                <Label className="lastName">
                    <span>Nazwisko: </span>
                    <input type="text" name="lastName" pattern="[a-zA-Z]*" maxLength="35" required/>
                </Label>
                <Label className="phoneNumber">
                    <span>Numer telefonu: </span>
                    <input type="tel" name="phoneNumber" pattern="[0-9]{3}[0-9]{3}[0-9]{3}" required/>
                </Label>
                <Label className="sex">
                    <span>Płeć: </span>
                    <select defaultValue="female" name="sex" required>
                        <option value="female">kobieta</option>
                        <option value="male">mężczyzna</option>
                    </select>
                </Label>
                <input className="submit" type="submit" value="zapisz"/>
            </Form>
        </>
    )
}