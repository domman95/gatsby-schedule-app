import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Heading from '../components/Heading';
import Panel from '../components/Panel';
import Radio from '../components/Radio';
import Select from '../components/Select';
import MainContext from '../context/MainContext';
import CalendarContainer from '../templates/Calendar/CalendarContainer';
import HoursColumn from '../templates/Calendar/HoursColumn';
import WorkersColumns from '../templates/Calendar/WorkersColumn';


const CalendarDate = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
        h2 {
            text-align: center;
            padding: 0 5px;
            font-size: clamp(16px, 20px, 24px);
            white-space: nowrap;
        }

        button {
            border: none;
            background: transparent;
            font-size: 32px;
            transition: transform .3s;

            &:nth-child(1):hover {
                transform: translateX(-4px);
            }

            &:nth-child(3):hover {
                transform: translateX(4px);
            }
        }
`

const FormStyles = styled.form`
    display: flex;

    label:nth-child(1) span{
        border-top-left-radius: 6px;
        border-bottom-left-radius: 6px;
    }

    label:nth-child(2) span{
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px;
        border-left: none;
    }
`


export default function Calendar() {

    const [value, setValue] = useState();
    
    const context = React.useContext(MainContext);
    const { date } = context;

    useEffect(() => {
        setValue(date.clone());
    }, [])

    const nextDay = () => {
        setValue(value.clone().add(1, 'day'));
    }

    const prevDay = () => {
        setValue(value.clone().subtract(1, 'day'));
    }

    return (
        <>
            <Heading>Kalendarz</Heading>
            <Panel>
                <FormStyles className="calendarForm" onChange={(e) => console.log(e.target.value)}>
                    <Radio checked>Dzień</Radio>
                    <Radio>Tydzień</Radio>
                </FormStyles>
                <CalendarDate className="calendarDate">
                    <button onClick={prevDay}>&#x21E0;</button>
                    <h2>{value && value.format('DD MMMM YYYY')}</h2>
                    <button onClick={nextDay}>&#x21E2;</button>
                </CalendarDate>
                <Select className="calendarWorkers" template="Pracownicy">
                    {[{name: 'Wszyscy'}, {name: 'Pracownik 1'}, {name: 'Pracownik 2'}, {name: 'Pracownik 3'}]}
                </Select>
            </Panel>
            <CalendarContainer>
                <HoursColumn />
                <WorkersColumns date={value}/>
            </CalendarContainer>
        </>
    )
}