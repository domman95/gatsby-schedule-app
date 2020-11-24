import React, {useState} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { hours, workers } from '../context/data';
import moment from 'moment';
import MainContext from '../context/MainContext';
import { db } from '../services/firebase';
import Button from './Button';

const Title = styled.h3`

`

const Form = styled.form`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;

    .submit {
        grid-column: 1 / 2;
        border: none;
        background: var(--blue);
        color: white;
        border-radius: 6px;
        padding: 10px 0;
    }

    .delete {
        grid-column: 2 / -1;
    }
`

const Label = styled.label`
    position: relative;
    display: grid;
    grid-template-columns: 1fr;
    gap: 5px;

    &.day,
    &.services {
        grid-column: 1 / -1;
    }

    &.end,
    &.start {
        margin-bottom: 10px;
    }

    input,
    select {
        border: 1px solid var(--blue);
        border-radius: 6px;
        padding: 5px 0;
    }

    input[type=text] {
        padding: 5px;
    }

    .filtered {
        position: absolute;
        border: 1px solid var(--blue);
        border-radius: 6px;
        top: 0;
        left: 0;
        width: 100%;
        transform: translateY(100%);
        z-index: 99999;
        background: var(--white);

        ul {
            color: black;
            
            li {
                list-style: none;
                margin: 5px;
                border-bottom: 1px solid var(--grey);
            }

        }
    }

`

export default function EditVisit({ workerName, dateVisit, timeStart, timeEnd, visitServices, customerId, visitId, close }) {
    
    const [newVisit, setNewVisit] = useState({
        worker: workerName,
        date: dateVisit.format('YYYY-MM-DD'),
        start: timeStart,
        end: timeEnd,
        services: visitServices,
    })

    const [visitCustomer, setVisitCustomer] = useState(customerId);
        
    const { worker, date, start, end, services } = newVisit;
    
    const context = React.useContext(MainContext);
    const { customers, visits } = context;
    
    const handleChange = (e) => {
        if (e.target.name === 'customer') return;
        setNewVisit({
            ...newVisit,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const id = visitCustomer;

        db.collection('customers').doc(id).collection('visits').doc(visitId).set({ ...newVisit }).then(() => {
            close(false);
            window.location.reload();
        })
    }

    const deleteVisit = (e) => {
        e.preventDefault();
        const id = visitCustomer;

        db.collection('customers').doc(id).collection('visits').doc(visitId).delete().then(() => {
            close(false);
            window.location.reload();
        })
    }

    return (
        <>
            <Title>Edytuj wizytę</Title>
            <Form onChange={handleChange} onSubmit={handleSubmit}>
                <Label className="worker">
                    <span>Pracownik: </span>
                    <select defaultValue={worker} name="worker">
                        <option value="Pracownik 1">Pracownik 1</option>
                        <option value="Pracownik 2">Pracownik 2</option>
                        <option value="Pracownik 3">Pracownik 3</option>
                    </select>
                </Label>
                <Label className="customer">
                    <span>Klient: </span>
                    <select defaultValue={visitCustomer} onChange={(e) => setVisitCustomer(e.target.value)} name="customer" required>
                            <option></option>
                        {customers.map(({firstName, lastName, customerId}) => {
                            let fullName = `${firstName} ${lastName}`;
                            return (
                                <option key={customerId} value={customerId}>{fullName}</option>
                            )
                        })}
                    </select>
                </Label>
                <Label className="day">
                    <span>Dzień: </span>
                    <input type="date" name="date" defaultValue={date} />
                </Label>
                <Label className="services">
                    <span>Usługi: </span>
                    <select defaultValue={services} name="services">
                        <option value="strzyżenie">strzyżenie</option>
                        <option value="koloryzacja">koloryzacja</option>
                        <option value="modelowanie">modelowanie</option>
                    </select>
                </Label>
                <Label className="start">
                    <span>Początek wizyty: </span>
                    <select defaultValue={start} name="start">
                        {hours.map(({ start }) => (<option key={start} value={start}>{start}</option>))}
                    </select>
                </Label>
                <Label className="end">
                    <span>Koniec wizyty: </span>
                    <select defaultValue={end} name="end">
                        {hours.filter(hour => hour.end > start && hour).map(({end}) => (<option key={end} value={end}>{end}</option>))}
                    </select>
                </Label>
                <input className="submit" type="submit" value="zapisz" />
                <Button secondary className="delete" onClick={deleteVisit}>usuń</Button>
            </Form>
        </>
    )
}

EditVisit.propTypes = {
    workerName: PropTypes.string,
    dateVisit: PropTypes.object,
    timeStart: PropTypes.string,
    timeEnd: PropTypes.string,
}

EditVisit.defaultProps = {
    dateVisit: moment(),
    workerName: workers[0].name,
    timeStart: hours[0].start,
    timeEnd: hours[0].end,
}