import React from 'react';
import styled from 'styled-components';
import Heading from '../components/Heading';
import Panel from '../components/Panel';
import Radio from '../components/Radio';
import Select from '../components/Select';


const CalendarDate = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
        h2 {
            text-align: center;
            padding: 0 20px;
            font-size: clamp(16px, 20px, 24px);
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
    return (
        <>
            <Heading>Kalendarz</Heading>
            <Panel>
                <FormStyles onChange={(e) => console.log(e.target.value)}>
                    <Radio checked>Dzień</Radio>
                    <Radio>Tydzień</Radio>
                </FormStyles>
                <CalendarDate>
                    <button>&#x21E0;</button>
                    <h2>19 października 2020</h2>
                    <button>&#x21E2;</button>
                </CalendarDate>
                <Select template="Pracownicy">
                    {[{name: 'Wszyscy'}, {name: 'Pracownik 1'}, {name: 'Pracownik 2'}, {name: 'Pracownik 3'}]}
                </Select>
            </Panel>
        </>
    )
}