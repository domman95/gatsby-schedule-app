import React from 'react';
import styled from 'styled-components';
import Heading from '../components/Heading';
import Panel from '../components/Panel';
import Radio from '../components/Radio';
import Select from '../components/Select';
import { workers, hours } from '../context/data';
import MainContext from '../context/MainContext';


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

const MainStyles = styled.main`
    display: grid;
    grid-template-columns: 80px 1fr;
    justify-content: center;
    background: var(--white);
    border-radius: 6px;
    margin: 0 10px 20px;
    overflow-y: scroll;
    flex: 1;
`

const HoursStyles = styled.div`

    .hour {
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        border-bottom: 1px solid var(--grey);
        border-right: 1px solid var(--grey);
    }

`

const WorkersStyles = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    .field {
        border-bottom: 1px solid var(--grey);
        border-right: 1px solid var(--grey);
        height: 50px;
    }
`

const WorkerColor = styled.div`
    width: 20px;
    height: 20px;
    background: ${({ color: { r, g, b } }) => `rgb(${r}, ${g}, ${b})`};
    margin-right: 5px;
    border-radius: 6px;
`

export default function Calendar() {

    const context = React.useContext(MainContext)

    const { hours } = context;

    return (
        <>
            <Heading>Kalendarz</Heading>
            <Panel>
                <FormStyles className="calendarForm" onChange={(e) => console.log(e.target.value)}>
                    <Radio checked>Dzień</Radio>
                    <Radio>Tydzień</Radio>
                </FormStyles>
                <CalendarDate className="calendarDate">
                    <button>&#x21E0;</button>
                    <h2>19 października 2020</h2>
                    <button>&#x21E2;</button>
                </CalendarDate>
                <Select className="calendarWorkers" template="Pracownicy">
                    {[{name: 'Wszyscy'}, {name: 'Pracownik 1'}, {name: 'Pracownik 2'}, {name: 'Pracownik 3'}]}
                </Select>
            </Panel>
            <MainStyles>
                <HoursStyles>
                    <div className="header">
                        <p>Godz</p>
                    </div>
                    {hours.map(({ start }) => (
                        <div className="hour" key={start}>
                            <p className="start">{start}</p>
                        </div>
                    ))}
                </HoursStyles>
                <WorkersStyles>
                    {workers.map(({ id, name, color }) => {
                        return (
                            <div className="column" key={id} color={color}>
                                <div className="header">
                                    <WorkerColor color={color} />
                                    <p>{name}</p>
                                </div>
                                    {hours.map(({ start, end }) => (
                                    <div className="field" key={start}></div>
                                ))}    
                            </div>
                        )
                    })}
                </WorkersStyles>
            </MainStyles>
        </>
    )
}